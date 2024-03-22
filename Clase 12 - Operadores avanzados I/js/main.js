// Sugar Syntax

//! Operador ++
// let numero = 1;
// numero = numero + 1;
// numero += 1;
// numero++;

//! Operador ternario
// let temperatura = 31;
// if (temperatura > 30) {
//     console.log("Día caluroso");
// } else {
//     console.log("Día agradable");
// }

// temperatura > 30 ? console.log("Día caluroso") : console.log("Día agradable");

// console.log(temperatura > 30 ? "Día caluroso" : "Día agradable");

// let tiempoHoy;
// if (temperatura > 30) {
//     tiempoHoy = "Caluroso";
// }  else {
//     tiempoHoy = "Agradable";
// }

// let tiempoHoy = temperatura > 30 ? "Caluroso" : "Agradable";
// console.log(tiempoHoy);

//! Operador AND &&

// let edad = 15;
// if (edad < 18) {
//     console.log("No podés ingresar");
// }
// edad < 18 && console.log("No podés ingresar");

// let temperatura = 35;
// let tiempoHoy;
// if (temperatura < 30) {
//     tiempoHoy = "Agradable";
// }
// let tiempoHoy = temperatura < 30 && "Agradable";
// console.log(tiempoHoy);

//! Operador OR ||

// console.log( 0 || "Es falsy" ); // Es falsy
// console.log( 40 || "Es falsy" ); // 40
// console.log( null || "Es falsy" ); // Es falsy
// console.log( undefined || "Es falsy" ); // Es falsy
// console.log( "Hola!" || "Es falsy" ); // "Hola!"
// console.log( "" || "Es falsy" ); // Es falsy
// console.log( NaN || "Es falsy" ); // Es falsy
// console.log( true || "Es falsy" ); // true
// console.log( false || "Es falsy" ); // Es falsy

// const usuario1 = {
//     nombre: "Carpi",
//     edad: 28
// }
// let usuario2 = true;

// console.log(usuario1 ? usuario1 : "El usuario no existe");
// console.log(usuario2 ? usuario2 : "El usuario no existe");

// console.log(usuario1 || "El usuario no existe");
// console.log(usuario2 || "El usuario no existe");

// if (usuario1) {
//     console.log(usuario1);
// } else {
//     console.log("El usuario no existe");
// }


//? Ejemplo de carrito

// let carritoEnLS = localStorage.getItem("carrito");
// let carrito;

// if (carritoEnLS) {
//     carrito = JSON.parse(carritoEnLS);
// } else {
//     carrito = [];
// }

// let carrito = localStorage.getItem("carrito") || [];
// console.log(carrito);

//! Operador Nullish

// console.log( 0 ?? "Es nullish" ); // 0
// console.log( 40 ?? "Es nullish" ); // 40
// console.log( null ?? "Es nullish" ); // Es nullish
// console.log( undefined ?? "Es nullish" ); // Es nullish
// console.log( "Hola!" ?? "Es nullish" ); // "Hola!"
// console.log( "" ?? "Es nullish" ); // ""
// console.log( NaN ?? "Es nullish" ); // NaN
// console.log( true ?? "Es nullish" ); // true
// console.log( false ?? "Es nullish" ); // false

//! Acceder condicionalmente a un objeto

// let usuario;
// console.log( usuario?.nombre || "El usuario no existe" );

// let usuario = {
//     nombre: "Carpi",
//     edad: 28,
//     pasatiempos: {
//         pasatiempos1: "Dota"
//     }
// }
// console.log(usuario?.trabajos?.trabajo1 || "Esa propiedad no existe");

//! Desestructuración de objetos

let usuario = {
    nombre: "Carpi",
    edad: 28,
    pais: "Argentina",
    pasatiempos: {
        pasatiempos1: "Dota",
        pasatiempos2: "JS"
    }
}

// let { nombre, edad, pasatiempos: { pasatiempos1 } } = usuario;
// console.log(pasatiempos1)

// let div = document.createElement("div");
// div.innerHTML = `
//     <h1>${nombre}</h1>
//     <p>Edad: ${edad}</p>
// `;
// document.body.append(div);

// function mostrarInfo({ nombre, edad, pais }) {
//     console.log(nombre);
//     console.log(edad);
//     console.log(pais);
// }

// mostrarInfo(usuario);

//! Desestructuración de Arrays

// const nombres = ["Carpi", "Gian", "Milton", "Sebas", "Ciro"];
// const [a, b, c] = nombres;

// let carpi = nombres.find(nombre => nombre === "Carpi");