// console.log(document);
// console.log(document.head);
// console.log(document.body);

// let titulo = document.getElementById("titulo");

// let parrafos = document.getElementsByClassName("parrafo");

let divs = document.getElementsByTagName("div");
// console.log(divs);
// console.log(divs[1].innerText); // Nos muestra todo el texto dentro de este elemento, sin incluir etiquetas HTML
// console.log(divs[1].innerHTML); // Nos muestra todo el HTML dentro de este elemento, incluidas etiquetas



// GETELEMENT => versión anterior, sigue vigente
// QUERYSELECTOR => forma más moderna, más versátil

// let titulo = document.querySelector("#titulo");
// console.log(titulo);

let parrafos = document.querySelectorAll("p.parrafo");

// for (const parrafo of parrafos) {
//     console.log(parrafo.innerText);
// }

// parrafos.forEach(parrafo => console.log(parrafo));

// // console.log(parrafos[0].innerText);
// parrafos[0].innerText = "Hola, gente!";
// // console.log(parrafos[0].innerText);
// parrafos[0].innerHTML = "Hola, <strong class='gente'>gente</strong>!";

// parrafos[0].classList.add("principal"); // Agrega una clase
// parrafos[0].classList.remove("primero"); // Quita una clase
// parrafos[0].classList.toggle("primero"); //Si la tiene, la quita; si no la tiene, la agrega

// if (parrafos[0].classList.contains("primero")) { // Devuelve bool, true si está la clase, false si no
//     parrafos[0].classList.remove("primero");
// } else {
//     parrafos[0].classList.add("primero");
// }

// parrafos[0].remove();

// const contenido = document.querySelector("#contenido");

// let parrafoCuarto = document.createElement("p");
// parrafoCuarto.innerText = "Hola, este es el párrafo creado en JS.";
// contenido.prepend(parrafoCuarto); // Agrega al comienzo
// contenido.append(parrafoCuarto); // Agrega al final


// console.log(parrafoCuarto);

// let input = document.querySelector("#nombre");
// input.value = "Carpi";
// console.log(input.value);

// const animales = [
//     {
//         nombre: "Perro",
//         emoji: "🐶",
//         precio: 5000
//     },
//     {
//         nombre: "Gato",
//         emoji: "😺",
//         precio: 3000
//     },
//     {
//         nombre: "Rata",
//         emoji: "🐀",
//         precio: 13000
//     }
// ];
// const listado = document.querySelector("#listado");

// const ul = document.createElement("ul");

// animales.forEach((animal) => {
//     ul.innerHTML += `<li>${animal.emoji} ${animal.nombre} - Precio: $${animal.precio}</li>`;
// })

// listado.append(ul);