// function sumarRangoDeNumeros(minimo, maximo) {
//     let total = 0;

//     for (let i = minimo; i <= maximo; i++) {
//         total += i;
//     }

//     return total;
// }

// console.log(sumarRangoDeNumeros(1, 10));
// console.log(sumarRangoDeNumeros(3, 8));
// console.log(sumarRangoDeNumeros(50, 60));
// console.log(sumarRangoDeNumeros(1, 6));


const numeros = [15, 20, 65, 73, 1, 8, 36, 24];

const animales = ["Jirafa", "León", "Tigre", "Lagarto", "Tortuga", "Zarigüeya"];

const productos = [
    { nombre: "Mesa", precio: 5000 },
    { nombre: "Ventana", precio: 3000 },
    { nombre: "Perchero", precio: 1200 },
    { nombre: "Puerta de metal", precio: 4000 },
    { nombre: "Puerta de madera", precio: 3000 }
];


//? forEach() => Recorrer el Array y ejecutar lo que necesitemos con cada elemento

// numeros.forEach(numero => {
//     console.log(numero);
// });

// productos.forEach(producto => {
//     console.log(producto.nombre);
//     console.log(producto.precio);
// });

//? find() => Recorrer el Array y retornar el primer elemento que cumpla con la condición

// const tigre = animales.find(animal => animal === "Tigre");
// console.log(tigre);

// let productoElegido = prompt("Ingresá el producto que querés comprar");
// const productoEnArray = productos.find((producto) => producto.nombre === productoElegido);
// console.log(productoEnArray);

//? filter() => Recorrer el Array y retornar un Array nuevo con todos los elementos que cumplan con la condición

// const tigre = animales.filter(animal => animal === "Tigre");
// console.log(tigre);

// const precioDeseadoMaximo = parseInt(prompt("Ingrese el precio máximo que quiere pagar"));
// const precio3000 = productos.filter((producto) => producto.precio <= precioDeseadoMaximo);
// console.log(precio3000);

// let animalesConT = animales.filter(animal => animal.charAt(0) === 'T') ;
// console.log(animalesConT);

// let busqueda = prompt("Ingrese un producto").toLowerCase();
// const puertas = productos.filter(producto => producto.nombre.toLowerCase().includes(busqueda));
// console.log(puertas);

//? some() => Recorrer el Array y responder true o false según si encuentra o no un elemento que cumpla con la condición

// const gato = animales.some(animal => animal === "Gato");
// console.log(gato); // false

// const jirafa = animales.some(animal => animal === "Jirafa");
// console.log(jirafa); // true

// if (animales.some(animal => animal === "Gato")) {
//     console.log(animales.find(animal => animal === "Gato"));
// } else {
//     animales.push("Gato");
//     console.log(animales);
// }

// let animalAgregado;
// do {
//     animalAgregado = prompt("Ingrese un animal");
//     if (!animales.some(animal => animal === animalAgregado)) {
//         animales.push(animalAgregado);
//     }
//     console.log(animales);
// } while (animales.length <= 10);

// ? map() => Recorrer el Array y retornar un nuevo Array con los elementos transformados del Array original

// const nombres = productos.map((producto) => producto.nombre);
// console.log(nombres);

// const preciosNuevos = productos.map((producto) => {
//     return {
//         nombre: producto.nombre,
//         precio: producto.precio * 1.5
//     }
// });

// console.log(productos);
// console.log(preciosNuevos);

//? reduce() => Recorrer el Array y retornarnos un único valor tras hacer una operación sobre los elementos del Array

// const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
// console.log(total);

// const totalCarrito = productos.reduce((acc, producto) => acc + producto.precio, 0);
// console.log(totalCarrito);

//? sort() => Reordenar el Array según el criterio que necesitemos
// numeros.sort((a, b) => a - b);
// console.log(numeros);

// numeros.sort((a, b) => a + b);
// console.log(numeros);

// productos.sort((a, b) => a.precio - b.precio);
// console.log(productos);

// productos.sort((a, b) => {
//     if (a.nombre > b.nombre) {
//         return 1;
//     } else if (a.nombre < b.nombre) {
//         return -1;
//     } else {
//         return 0;
//     }
// })

// console.log(productos);