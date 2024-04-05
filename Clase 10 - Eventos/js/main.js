/**** EVENTOS ****/

//! EVENTOS DEL MOUSE

const botonAlerta = document.querySelector("#alerta");
// botonAlerta.addEventListener("click", mostrarAlerta);

// function mostrarAlerta() {
//     alert("Hola!");
// }

// botonAlerta.onclick = () => {
//     alert("Hola!");
// }

//? CUANDO SE HACE CLICK
// botonAlerta.addEventListener("click", () => {
//     console.log("Click");
// })

//? CUANDO APRIETO EL CLICK
// botonAlerta.addEventListener("mousedown", () => {
//     console.log("Mouse down");
// })

//? CUANDO SUELTO EL CLICK
// botonAlerta.addEventListener("mouseup", () => {
//     console.log("Mouse up");
// })

//? CUANDO MUEVO EL MOUSE
// botonAlerta.addEventListener("mousemove", (e) => {
//     console.log(e);
// })

//? CUANDO HAGO HOVER
// botonAlerta.addEventListener("mouseover", () => {
//     console.log("Mouse over");
// })

//? CUANDO SACO EL HOVER
// botonAlerta.addEventListener("mouseout", () => {
//     console.log("Mouse out");
// })

//? CAMBIAR MODO DE COLOR
// const botonColorMode = document.querySelector("#color-mode");

// botonColorMode.addEventListener("click", () => {

//     document.body.classList.toggle("dark-mode");

//     if (document.body.classList.contains("dark-mode")) {
//         botonColorMode.innerText = "☀️";
//     } else {
//         botonColorMode.innerText = "🌙";
//     }

// })

//! EVENTOS DEL TECLADO

const alertaForm = document.querySelector("#alerta-form");
const alertaInput = document.querySelector("#alerta-input");
const alertaSubmit = document.querySelector("#alerta-submit");

// alertaInput.addEventListener("keydown", () => {
//     console.log("Apreté!")
// })

// alertaInput.addEventListener("keyup", () => {
//     console.log("Solté!")
// })

// alertaInput.addEventListener("change", (e) => {
//     console.log(e.target.value);
// })

// alertaInput.addEventListener("input", (e) => {
//     console.log(e.target.value);
// })

// alertaForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     alert(alertaInput.value);
// })

// const abajoInput = document.querySelector("#abajo-input");
// const abajoParrafo = document.querySelector("#abajo");

// abajoInput.addEventListener("input", (e) => {
//     abajoParrafo.innerText = e.target.value;
// })

const agregarLista = document.querySelector("#agregar");
const agregarForm = document.querySelector("#agregar-form");
const agregarInput = document.querySelector("#agregar-input");



agregarForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (agregarInput.value.trim() !== "") {

        const li = document.createElement("li");
        li.classList.add("lista-item");
        li.innerHTML = `<span>${agregarInput.value}</span>`;

        const spanBorrar = document.createElement("span");
        spanBorrar.innerText = "🚮";
        spanBorrar.classList.add("span-borrar");
        spanBorrar.addEventListener("click", () => {
            li.remove();
        })
        li.append(spanBorrar);

        agregarLista.append(li);
        agregarForm.reset();

    }

    agregarInput.focus();

})