const numeros1 = [15, 25, 30, 1, 7];
const numeros2 = [10, 3, 5, 48, 90];

// console.log(Math.max(...numeros1));
// console.log(Math.min(...numeros1));

// console.log( numeros1.reduce((acc, num) => acc + num, 0) );

// console.log( numeros1[2] + numeros1[4] );

//? SPREAD de Array en Objeto (convierte array en obj)
// const numeros2 = {...numeros1};
// console.log(numeros1);
// console.log(numeros2);

//? SPREAD para concatenar o duplicar Arrays
// const numeros3 = [...numeros1, ...numeros2, 80, 70, 50];
// console.log(numeros3);

// const numeros4 = [...numeros1];
// numeros4.push(30);
// console.log(numeros1);

// const usuario1 = {
//     nombre: "Carpi",
//     edad: 28,
//     pais: "Argentina"
// }

// console.log(usuario1);

// const usuario2 = {...usuario1};

// const usuario3 = {
//     ...usuario1,
//     pasatiempos: "Dota",
//     pais: "Brasil"
// }

// console.log(usuario1);
// console.log(usuario2);
// console.log(usuario3);


// const productos = [
//     {
//         titulo: "Silla",
//         precio: 3000
//     },
//     {
//         titulo: "Sillón",
//         precio: 4000
//     },
//     {
//         titulo: "Mesa",
//         precio: 5000
//     },
//     {
//         titulo: "Ventana",
//         precio: 6000
//     },
// ];

// const carrito = [];
// // productos[0]

// if (carrito.includes(productos[0])) {
//     let productoEncontrado = carrito.find(producto => producto = productos[0]);
//     productoEncontrado.cantidad++;
// } else {
//     carrito.push({
//         ...productos[0],
//         cantidad: 1
//     })
// }

// console.log(carrito);

// function sumar(...numeros) {
//     console.log(numeros.reduce((acc, num) => acc + num, 0));
// }

// sumar(1, 2);
// sumar(1);
// sumar(1, 2, 3);