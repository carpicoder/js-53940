let baseDeDatos;
baseDeDatos = [
    { id: "silla", nombre: "Silla", precio: 1500 },
    { id: "sillon", nombre: "Sillón", precio: 2500 },
    { id: "puerta", nombre: "Puerta", precio: 3500 },
    { id: "ventana", nombre: "Ventana", precio: 4500 }
];

const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (baseDeDatos) {
                resolve(baseDeDatos);
            } else {
                reject("Productos no disponibles.");
            }
        }, 2000);
    })
}

let productos = [];

const lista = document.querySelector("#lista-productos");

function mostrarProductos(array) {
    array.forEach(item => {
        const li = document.createElement("li");
        li.id = item.id;
        li.innerText = `${item.nombre} - $${item.precio}`;

        lista.append(li);
    });
}

pedirProductos()
    .then((res) => {
        productos = [...res];
        mostrarProductos(productos);
    })
    .catch((err) => {
        lista.innerText = err;
    })