const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
console.log(carrito);

const productos = [
    {
        id: "abrigo01",
        titulo: "Abrigo 01",
        precio: 3000,
        img: "./img/01.jpg"
    },
    {
        id: "abrigo02",
        titulo: "Pantalón 02",
        precio: 3000,
        img: "./img/02.jpg"
    },
    {
        id: "abrigo03",
        titulo: "Camisa 03",
        precio: 3000,
        img: "./img/03.jpg"
    },
    {
        id: "abrigo04",
        titulo: "Camiseta 04",
        precio: 3000,
        img: "./img/04.jpg"
    }
];

const contenedorProductos = document.querySelector("#productos");
const carritoVacio = document.querySelector("#carrito-vacio");
// const carritoComprado = document.querySelector("#carrito-comprado");
const carritoProductos = document.querySelector("#carrito-productos");
const carritoTotal = document.querySelector("#carrito-total");
const vaciar = document.querySelector("#vaciar");

const cargarProductos = (productos) => {
    contenedorProductos.innerHTML = "";
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
}
cargarProductos(productos);

const actualizarCarrito = () => {
    if (carrito.length === 0) {
        carritoVacio.classList.remove("d-none");
        carritoProductos.classList.add("d-none");
        vaciar.classList.add("d-none");
    } else {
        carritoVacio.classList.add("d-none");
        carritoProductos.classList.remove("d-none");
        vaciar.classList.remove("d-none");

        carritoProductos.innerHTML = "";
        carrito.forEach((producto) => {
            let div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <h3>${producto.titulo}</h3>
                <p>$${producto.precio}</p>
                <p>Cant: ${producto.cantidad}</p>
            `;

            let buttonMenos = document.createElement("button");
            buttonMenos.classList.add("carrito-producto-btn");
            buttonMenos.innerText = "👎";
            buttonMenos.addEventListener("click", () => {
                disminuirCantidad(producto);
            })

            let buttonMas = document.createElement("button");
            buttonMas.classList.add("carrito-producto-btn");
            buttonMas.innerText = "👍";
            buttonMas.addEventListener("click", () => {
                aumentarCantidad(producto);
            })

            let buttonX = document.createElement("button");
            buttonX.classList.add("carrito-producto-btn");
            buttonX.innerText = "✖️";
            buttonX.addEventListener("click", () => {
                borrarDelCarrito(producto);
            })

            div.append(buttonMenos);
            div.append(buttonMas);
            div.append(buttonX);
            carritoProductos.append(div);

        })
    }
    actualizarTotal();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const agregarAlCarrito = (producto) => {
    const itemEncontrado = carrito.find(item => item.id === producto.id);
    if (itemEncontrado) {
        itemEncontrado.cantidad++;
    } else {
        carrito.push( {...producto, cantidad: 1} );
    }
    actualizarCarrito();
}

const borrarDelCarrito = (producto) => {
    const prodIndex = carrito.findIndex(item => item.id === producto.id);
    carrito.splice(prodIndex, 1);
    actualizarCarrito();
}

const actualizarTotal = () => {
    let total = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0);
    carritoTotal.innerText = `$${total}`;
}

const disminuirCantidad = (producto) => {
    const itemEncontrado = carrito.find(item => item.id === producto.id);
    if (itemEncontrado.cantidad > 1) {
        itemEncontrado.cantidad--;
    } else if (itemEncontrado.cantidad === 1) {
        borrarDelCarrito(itemEncontrado)
    }
    actualizarCarrito();
}

const aumentarCantidad = (producto) => {
    const itemEncontrado = carrito.find(item => item.id === producto.id);
    itemEncontrado.cantidad++;
    actualizarCarrito();
}

vaciar.addEventListener("click", () => {
    carrito.length = 0;
    actualizarCarrito();
})

actualizarCarrito();


const input = document.querySelector("#busqueda");

input.addEventListener("input", () => {
    const productosFiltrados = productos.filter((producto) => producto.titulo.toLowerCase().includes(input.value.toLowerCase()));
    cargarProductos(productosFiltrados);
})