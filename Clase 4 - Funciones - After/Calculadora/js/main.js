function pedirNumero(mensaje) {
    let input;
    do {
        input = parseFloat(prompt(mensaje));

        if (isNaN(input)) {
            alert("Ingrese un número correcto!");
        }
    } while(isNaN(input));
    return input;
}

let num1 = pedirNumero("Ingrese el primer número:");
let num2 = pedirNumero("Ingrese el segundo número:");

let operacion = prompt("Seleccione una operación: \n1. Suma \n2. Resta \n3. Multiplicación \n4. División");

function calcular(num1Param, num2Param, operacionParam) {
    switch (operacionParam) {
        case "1":
            return num1Param + num2Param;
        case "2":
            return num1Param - num2Param;
        case "3":
            return num1Param * num2Param;
        case "4":
            return num1Param / num2Param;
        default:
            return "Operación inválida";
    }
}

let resultado = calcular(num1, num2, operacion);
console.log(resultado);