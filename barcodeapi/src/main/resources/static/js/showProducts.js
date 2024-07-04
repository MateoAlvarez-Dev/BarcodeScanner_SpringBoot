JsBarcode(`#uuid`, "41d6fc5d-ff9c-42e7-9c96");

(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
    .then(response => response.json())
    .then(data => {

        printData(data);

    })
})()

function printData(data){
    for(let { id } of data){
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("id", "b" + id);
        document.body.appendChild(svg);
        JsBarcode(`#b${id}`, id);
    }
}