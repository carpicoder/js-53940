const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
console.log(carrito);

const productos = [
    {
        id: "abrigo01",
        titulo: "Abrigo 01",
        precio: 3000,
        img: "./img/01.jpg",
        stock: 5
    },
    {
        id: "abrigo02",
        titulo: "Abrigo 02",
        precio: 3000,
        img: "./img/02.jpg",
        stock: 7
    },
    {
        id: "abrigo03",
        titulo: "Abrigo 03",
        precio: 3000,
        img: "./img/03.jpg",
        stock: 1
    }
];

const contenedorProductos = document.querySelector("#productos");
const carritoVacio = document.querySelector("#carrito-vacio");
// const carritoComprado = document.querySelector("#carrito-comprado");
const carritoProductos = document.querySelector("#carrito-productos");
const carritoTotal = document.querySelector("#carrito-total");

productos.forEach((producto) => {

    let div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
        <img class="producto-img" src="${producto.img}">
        <h3>${producto.titulo}</h3>
        <p>$${producto.precio}</p>
    `;

    let button = document.createElement("button");
    button.classList.add("producto-btn");
    button.innerText = "Agregar al carrito";
    button.addEventListener("click", () => {
        agregarAlCarrito(producto);
    });

    div.append(button);
    contenedorProductos.append(div);
})

const actualizarCarrito = () => {
    if (carrito.length === 0) {
        carritoVacio.classList.remove("d-none");
        carritoProductos.classList.add("d-none");
    } else {
        carritoVacio.classList.add("d-none");
        carritoProductos.classList.remove("d-none");

        carritoProductos.innerHTML = "";
        carrito.forEach((producto) => {
            let div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <h3>${producto.titulo}</h3>
                <p>$${producto.precio}</p>
                <p>Cant: ${producto.cantidad}</p>
            `;

            let button = document.createElement("button");
            button.classList.add("carrito-producto-btn");
            button.innerText = "✖️";
            button.addEventListener("click", () => {
                borrarDelCarrito(producto);
            })

            div.append(button);
            carritoProductos.append(div);

        })
    }
    actualizarTotal();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const agregarAlCarrito = (producto) => {
    if (producto.stock > 0) {
        const itemEncontrado = carrito.find(item => item.id === producto.id);
        if (itemEncontrado) {
            itemEncontrado.cantidad++;
            producto.stock--;
        } else {
            carrito.push( {...producto, cantidad: 1} );
            producto.stock--;
        }
        actualizarCarrito();
    } else {
        alert("No quedan más en stock!")
    }
}

const borrarDelCarrito = (producto) => {
    const itemEncontrado = productos.find(item => item.id === producto.id);
    itemEncontrado.stock += producto.cantidad;

    const prodIndex = carrito.findIndex(item => item.id === producto.id);
    carrito.splice(prodIndex, 1);
    actualizarCarrito();
}

const actualizarTotal = () => {
    const total = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0);
    carritoTotal.innerText = `$${total}`;
}

actualizarCarrito();