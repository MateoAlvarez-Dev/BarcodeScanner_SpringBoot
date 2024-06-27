const client = new StompJs.Client({
  brokerURL: "ws://192.168.88.17:8080/websocket",
});

let total = 0;

client.onConnect = function (frame) {
  console.log("Connected!");
  client.subscribe("/topic/barcodeReceiver", (data) => {
    console.log("Data received: ");
    let id = JSON.parse(data.body).decodedString;
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
  });
};

client.activate();
