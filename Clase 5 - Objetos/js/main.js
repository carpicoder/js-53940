// Objeto literal
// const usuario1 = {
//     nombre: "Carpi",
//     edad: 28,
//     nacionalidad: "Argentina",
//     casado: true,
//     pasatiempos: {
//         pasatiempo1: "Fútbol",
//         pasatiempo2: "DotA"
//     }
// };

// console.log(usuario1.nombre);
// console.log(usuario1["nombre"]);

// console.log(usuario1);

// usuario1.nombre = "Matias";

// console.log(usuario1);


// Función constructora

// function Usuario(nombre, edad, nacionalidad, casado) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.nacionalidad = nacionalidad;
//     this.casado = casado;
//     this.saludar = function() { console.log("Hola, " + this.nombre) };
// }

// const usuario1 = new Usuario("Carpi", 28, "Argentina", true);
// const usuario2 = new Usuario("Ciro", 18, "Córdoba", false);
// const usuario3 = new Usuario("Gian", 27, "Rosario", true);


// console.log('nombre' in usuario1);

// for (const propiedad in usuario1) {
//     console.log(propiedad);
// }

// const nombreIngresado = prompt("Ingrese nombre");
// const edadIngresada = prompt("Ingrese edad");
// const nacionalidadIngresada = prompt("Ingrese nacionalidad");
// let casadoIngresado = prompt("Ingrese casado");

// const usuario4 = new Usuario(nombreIngresado, edadIngresada, nacionalidadIngresada, casadoIngresado);


// let string = "Hola, mundo!";

// console.log(string.indexOf("ola"));


// class Producto {
//     constructor(titulo, precio, color) {
//         this.titulo = titulo;
//         this.precio = precio;
//         this.color = color;
//     }
//     sumarIVA() {
//         this.precio *= 1.21;
//         return this.precio;
//     }
// }

// const producto1 = new Producto("Sillón", 50, "Rojo");
// console.log(producto1.precio + "su precio total con iva es" + producto1.sumarIVA());