// localStorage
// sessionStorage

//! Seteamos un ítem con setItem
// localStorage.setItem("nombre", "Carpi");
// localStorage.setItem("edad", 28);


//! Obtenemos un ítem con getItem (se suele guardar en una variable)
// const nombreEnLS = localStorage.getItem("nombre");
// console.log(nombreEnLS);

//! Ejemplo de pedirle al usuario que ingrese su nombre y guardarlo en LS
// let usuario = localStorage.getItem("usuario");

// if (usuario === null) {
//     usuario = prompt("Ingrese su usuario");
//     localStorage.setItem("usuario", usuario);
// } else {
//     alert("Bienvenido, " + usuario);
// }

//! Recorrer el localStorage
// console.log(localStorage.length);

// for (let i = 0; i < localStorage.length; i++) {
//     let clave = localStorage.key(i);
//     console.log("Clave: " + clave);
//     console.log("Valor: " + localStorage.getItem(clave));
// }

//! Eliminar datos del storage
// localStorage.removeItem("nombre");
// localStorage.clear();


//! Guardar objetos en LS
// const usuario = {
//     nombre: "Carpi",
//     edad: 28,
//     pais: "Argentina"
// }

// Opción 1 = 2 pasos
// const usuarioJSON = JSON.stringify(usuario);
// localStorage.setItem("usuario", usuarioJSON);

// Opción 2 = 1 paso
// localStorage.setItem("usuario", JSON.stringify(usuario));

//! Obtener objeto de LS
// Opción 1 => 2 pasos
// const usuarioLS = localStorage.getItem("usuario");
// const usuarioParseado = JSON.parse(usuarioLS);
// console.log(usuarioParseado);

// Opción 2 => 1 paso
// const usuarioLS = JSON.parse(localStorage.getItem("pepito"));
// console.log(usuarioLS);


//! Guardar ARRAY DE OBJETOS en LS
// const productos = [
//     {
//         titulo: "Silla",
//         precio: 2000
//     },
//     {
//         titulo: "Sillón",
//         precio: 3000
//     },
//     {
//         titulo: "Mesa",
//         precio: 4000
//     }
// ]

// localStorage.setItem("productos", JSON.stringify(productos));

// let productosLS = localStorage.getItem("productos");
// console.log(JSON.parse(productosLS));


//? Ejemplo de DARK MODE

// const modoColorLS = localStorage.getItem("modocolor");
// if (modoColorLS === "oscuro") {
//     document.body.classList.toggle("dark-mode");
// }

// const botonColorMode = document.querySelector("#color-mode");

// botonColorMode.addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode");

//     if (document.body.classList.contains("dark-mode")) {
//         localStorage.setItem("modocolor", "oscuro");
//     } else {
//         localStorage.removeItem("modocolor");
//     }
// })