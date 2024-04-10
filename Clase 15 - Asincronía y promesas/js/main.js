
//! setTimeout

// console.log("Comienzo");

// setTimeout(() => {
//     console.log("Mitad");
// }, 0);

// console.log("Final");

//! setInterval

// let segundos = 0;
// let parrafoContador = document.querySelector("#contador");

// const contador = setInterval(() => {
//     segundos++;
//     parrafoContador.innerText = segundos;

//     if (segundos === 10) {
//         clearInterval(contador);
//     }
// }, 100);


//! PROMESAS

// const eventoFuturo = (res) => {
//     return new Promise( (resolve, reject) => {
//         setTimeout(() => {
//             res ? resolve("Promesa resuelta") : reject("Promesa rechazada");
//         }, 2000);
//     } );
// }

// eventoFuturo(false)
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Fin del proceso.")
//     })