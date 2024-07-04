const client = new StompJs.Client({
  brokerURL: `wss://${document.getElementById("ipAddress").value}:8080/websocket`
});

client.onConnect = function () {
  dropAlert("success", "connected succesfully!");
  client.subscribe("/topic/barcodeReceiver", (data) => {
    let id = JSON.parse(data.body).decodedString;
    loadProduct(id);
  });
};

client.onStompError = function (e) {
  dropAlert("error", "connection error...");
}

client.activate();


// =================================  APP LOGIC  ==================================


function init(){
  const cart = {}

  let total = 0;

  function removeProduct(id){
    if(cart[id]){
      delete cart[id];
      dropAlert("success", "Producto eliminado del carrito.");
      loadProducts();
    }
  }

  function loadProducts(){
    let cartElement = document.getElementById("cart");
    cartElement.innerHTML = "";
    total = 0;
    Object.entries(cart).forEach(([key, value]) => {
      let { title, price, description, images, amount } = value;
      cartElement.innerHTML += `
              <div class="cart-item">
                  <!--<img src="producto2.jpg" alt="Producto 2">-->
                  <div class="item-details">
                      <h3>${title}</h3>
                      <p>Cantidad: ${amount}</p>
                      <p>Precio: $${price}</p>
                      <button>Eliminar</button>
                  </div>
              </div>
      `;
      total += price * amount;
    });
    console.log(total);
    document.getElementById("total_price").innerHTML = total;
  }

  function loadProduct(id) {
    if(cart[id]){
      cart[id].amount++;
      dropAlert("success", "Producto añadido al carrito.");
      loadProducts();
      return;
    }

    fetch("https://api.escuelajs.co/api/v1/products/" + id)
      .then((response) => response.json())
      .then((data) => {
        let { title, price, description, images } = data;
        cart[id] = { title, price, description, images, amount: 1 };
        dropAlert("success", "Producto añadido al carrito.");
        loadProducts();
      }).catch(e => {
        dropAlert("error", "Error loading the product.");
        console.error(e);
      });
  }
}


function dropAlert(type, message) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: type,
      title: message
    });
  }