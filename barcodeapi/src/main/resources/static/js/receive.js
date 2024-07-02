const client = new StompJs.Client({
  brokerURL: globalBarcoderConfig.webSocketURL,
});

let total = 0;

client.onConnect = function (frame) {
  alert("CONNECTED SUCCESFULLY");
  client.subscribe("/topic/barcodeReceiver", (data) => {
    let id = JSON.parse(data.body).decodedString;
    console.log("Data received: " + id);
    loadProduct(id);
  });
};

function loadProduct(id) {
  fetch("https://api.escuelajs.co/api/v1/products/" + id)
    .then((response) => response.json())
    .then((data) => {
      let { title, price, description, images } = data;

      document.getElementById("container").innerHTML += `
            <div class="card">
            <img src="${images[0]}" alt="Producto 1">
            <div class="card-content">
                <div class="card-title">${title}</div>
                <div class="card-description">${description
                  .split(" ")
                  .slice(0, Math.floor(description.length / 2))}...</div>
                <div class="card-price">$${price}</div>
            </div>
            </div>
            `;

      total += price;

      document.getElementById("total_price").innerHTML = total;
    });
}

client.activate();
