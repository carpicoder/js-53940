// for
// for (let x = 1; x <= 10; x++) {
//     console.log("Ciclo for número " + x);
// }

// for anidado
// for (let x = 0; x < 10; x++) {
//     console.log("PRINCIPAL for número " + x + " iniciado");

//     for (let y = 0; y < 5; y++) {
//         console.log("SECUNDARIO for número " + y);
//     }

//     console.log("PRINCIPAL for número " + x + " terminado");
// }

// while
// let x = 0; // inicializador
// while (x < 10) { // condición
//     console.log("Ciclo while número " + x);
//     x = x + 1; // incrementador
// }

// do...while
// let z = 0;
// do {
//     console.log("Ciclo do...while número " + z);
//     z++;
// } while (z < 10);



// EJEMPLO DO WHILE
// let numeroIngresado;
// do {
//     numeroIngresado = parseFloat(prompt("Ingrese un número de 1 a 10"));
    
//     if ((numeroIngresado >= 1) && (numeroIngresado <= 10)) {
//         alert("Felicidades, tu número es correcto");
//     } else {
//         alert("Ingrese nuevamente, número equivocado");
//     }
// } while ((numeroIngresado > 10) || (numeroIngresado < 1));

//EJEMPLO FOR TABLAS
// let ingresarNumero = parseInt(prompt("Ingresar número para ver su tabla"));
// for (let i = 1; i <= 10; i++) {
//     let resultado = ingresarNumero * i;
//     console.log(ingresarNumero + " X " + i + " = " + resultado);
// }

// EJEMPLO FOR TURNOS
// for (let i = 1; i <= 5; i++) {
//     let nombre = prompt("Ingrese nombre para el turno");
//     console.log("Turno N° " + i + " para: " + nombre);
// }

// BREAK Y CONTINUE
// for (let i = 0; i <= 10; i++) {
//     if (i == 5) {
            // break;
//         continue;
//     }
//     console.log(i);
// }

// EJEMPLO WHILE 
// let entradaNombre = prompt("Ingrese un nombre. Para terminar, ingrese SALIR.");
// while (entradaNombre.toUpperCase() != "SALIR") {
//     console.log("El usuario ingresó " + entradaNombre);
//     entradaNombre = prompt("Ingrese un nombre");
// }


// EXPLICACION SWITCH
// let x = 3;

// switch (x) {
//     case 0:
//         console.log("SWITCH X vale 0");
//         break;
//     case 1:
//         console.log("SWITCH X vale 1");
//         break;
//     case 2:
//         console.log("SWITCH X vale 2");
//         break;
//     default:
//         console.log("SWITCH X no vale 0, ni 1, ni 2.");
// }

// COMPARACION SWITCH CON IF
// if (x == 0) {
//     console.log("IF X vale 0");
// } else if (x == 1) {
//     console.log("IF X vale 1");
// } else if (x == 2) {
//     console.log("IF X vale 2");
// } else {
//     console.log("IF X no vale 0, ni 1, ni 2.")
// }

// EJEMPLO WHILE + SWITCH ANIDADOS
// let nombreIngresado = prompt("Ingrese un nombre");
// while(nombreIngresado != "SALIR") {

//     switch (nombreIngresado) {
//         case "ANA":
//             console.log("Hola, Ana!");
//             break;
//         case "JUAN":
//             console.log("Hola, Juan!");
//             break;
//         default:
//             alert("¿QUIÉN SOS?");
//     }

//     nombreIngresado = prompt("Ingrese un nombre");

// }