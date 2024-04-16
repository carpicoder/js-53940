const contenedor = document.querySelector("#single-product");

const urlParams = new URLSearchParams(window.location.search);
const paramId = urlParams.get('id');

fetch('https://fakestoreapi.com/products/' + paramId)
    .then((res) => res.json())
    .then((data) => {
        rellenarHTML(data);
    })


const rellenarHTML = (producto) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <img style="width: 300px" src="${producto.image}">
        <h1>${producto.title}</h1>
        <p>$${producto.price}</p>
        <p>${producto.description}</p>
    `
    contenedor.append(div);
}