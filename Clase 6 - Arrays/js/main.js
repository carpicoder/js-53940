// [] square brackets
// {} curly brackets

// const productos = ["Sillón", "Mesa", "Silla"];
// const numeros = [1, 2, 3, 4, 5];
// const booleanos = [true, false, true, false];
// const mezclados = ["Sillón", 1, true];
// const usuarios = [
//     {
//         nombre: "Carpi",
//         edad: 28
//     },
//     {
//         nombre: "Gian",
//         edad: 27
//     }
// ];

// Recorrer un Array

// console.log(productos);
// for (let i = 0; i < productos.length; i++) {
//     console.log(productos[i]);
// }



// MÉTODOS

// .length -> Saber la longitud de un Array
// console.log(productos.length);

// .push() -> Agregar un elemento al final de un Array
// productos.push("Puerta");
// console.log(productos);

// .unshift() -> Agregar un elemento al comienzo del Array
// productos.unshift("Puerta");
// console.log(productos);

// .shift() -> Quitar el primer elemento del Array
// productos.shift();
// console.log(productos);

// .pop() -> Quitar el último elemento del Array
// productos.pop();
// console.log(productos);



// .splice(2, 1) -> Eliminar un elemento del Array sabiendo su índice
// productos.splice(2, 1);
// console.log(productos);

// Borrar un elemento del Array sabiendo su contenido
// for (let i = 0; i < productos.length; i++) {
//     if (productos[i] === "Silla") {
//         productos.splice(i, 1);
//     }
// }

// .join() -> Juntar todos los elementos de un Array en una String
// console.log(productos.join(", "));


// .concat() -> Combinar dos Arrays
// const muebles = ["Sillón", "Mesa", "Silla"];
// const aberturas = ["Ventana", "Puerta"];
// const roperos = ["Placard", "Estantería"];

// const productos = muebles.concat(aberturas, roperos);

// .slice() -> Recorta una parte del Array y lo guarda en otro
// const muebles = productos.slice(0, 3);
// const aberturas = productos.slice(3, 5);

// console.log(muebles);
// console.log(aberturas);

// .indexOf() -> Devuelve el índice del elemento buscado
// console.log(productos.indexOf("Silla"));

// .includes() -> Devuelve true o false fijándose si el elemento está en el Array
// console.log(productos.includes("Silla")); // -> true
// console.log(productos.includes("Ropero")); // -> false

// const productos = ["Sillón", "Mesa", "Silla", "Ventana", "Puerta"];

// productos.reverse();
// console.log(productos);


// const listaNombres = [];
// let nombreIngresado;

// do {
//     nombreIngresado = prompt("Ingresar un nombre");
//     if (nombreIngresado.toLowerCase() === "salir") {
//         break;
//     }
//     listaNombres.push(nombreIngresado);
// } while (nombreIngresado.toLowerCase() != "salir");

// console.log(listaNombres);

// const producto1 = {
//     nombre: "Arroz",
//     precio: 1500
// }

// const productos = [
//     producto1,
//     {
//         nombre: "Fideos",
//         precio: 3000
//     }
// ]

// productos.push(
//     {
//         nombre: "Lentejas",
//         precio: 4500
//     }
// )

// console.log(productos);


const productos = [
    {
        nombre: "Arroz",
        precio: 1500
    },
    {
        nombre: "Fideos",
        precio: 2000,
    },
    {
        nombre: "Lentejas",
        precio: 3000
    }
]

// for (const propiedad in object)

for (const producto of productos) {
    console.log(producto.nombre);
    console.log(producto.precio);
}