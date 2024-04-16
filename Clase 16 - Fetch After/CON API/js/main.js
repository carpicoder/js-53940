const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contenedorProductos = document.querySelector("#productos");
const carritoVacio = document.querySelector("#carrito-vacio");
// const carritoComprado = document.querySelector("#carrito-comprado");
const carritoProductos = document.querySelector("#carrito-productos");
const carritoTotal = document.querySelector("#carrito-total");
const vaciar = document.querySelector("#vaciar");
const confirmar = document.querySelector("#confirmar");
const botonesVaciarConfirmar = document.querySelectorAll(".boton-vaciar-o-confirmar");

let productos = [];

fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
        productos = [...data];
        cargarProductos(productos);
    })

const cargarProductos = (productos) => {
    contenedorProductos.innerHTML = "";
    productos.forEach((producto) => {
    
        let div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-img" src="${producto.image}">
            <h3>${producto.title}</h3>
            <p>$${producto.price}</p>
            <a class="producto-btn" href="/producto.html?id=${producto.id}">Ver más info</a>
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

const actualizarCarrito = () => {
    if (carrito.length === 0) {
        carritoVacio.classList.remove("d-none");
        carritoProductos.classList.add("d-none");
        vaciar.classList.add("d-none");
        confirmar.classList.add("d-none");
    } else {
        carritoVacio.classList.add("d-none");
        carritoProductos.classList.remove("d-none");
        vaciar.classList.remove("d-none");
        confirmar.classList.remove("d-none");

        carritoProductos.innerHTML = "";
        carrito.forEach((producto) => {
            let div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <h3>${producto.title}</h3>
                <p>$${producto.price}</p>
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

    Toastify({
        text: `${producto.title} agregado al carrito.`,
        duration: 3000,
        style: {
          background: "#ff3c00",
          color: "#f2ebd9",
          borderRadius: ".5rem"
        },
    }).showToast();
}

const borrarDelCarrito = (producto) => {
    const prodIndex = carrito.findIndex(item => item.id === producto.id);
    carrito.splice(prodIndex, 1);
    actualizarCarrito();
}

const actualizarTotal = () => {
    let total = carrito.reduce((acc, prod) => acc + (prod.price * prod.cantidad), 0).toFixed(2);
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

botonesVaciarConfirmar.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        const cantidadTotal = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
        const targetId = e.target.id;
        Swal.fire({
            title: targetId === "vaciar" ? "¿Querés borrar los " + cantidadTotal + " productos de tu carrito?" : "¿Querés confirmar tu compra de " + cantidadTotal + " productos?",
            showCancelButton: true,
            confirmButtonText: targetId === "vaciar" ? "Sí, vaciar carrito!" : "Sí, quiero comprar!",
            cancelButtonText: "No, apreté sin querer."
          }).then((result) => {
            if (result.isConfirmed) {
              carrito.length = 0;
              actualizarCarrito();
              Swal.fire({
                title: targetId === "vaciar" ? "¡Carrito vaciado!" : "¡Compra confirmada!",
                icon: "success"
              });
            }
          });
    })
})

actualizarCarrito();

const input = document.querySelector("#busqueda");

input.addEventListener("input", () => {
    const productosFiltrados = productos.filter((producto) => producto.title.toLowerCase().includes(input.value.toLowerCase()));
    cargarProductos(productosFiltrados);
})