let gastosMensuales = [];
let categoriasContador = {};
let categoriasTotales = {};

let categoriaGastoAgregado;
let montoGastoAgregado;

do {
    categoriaGastoAgregado = prompt("Ingresá la categoría que querés registrar. Para terminar, escribí \"SALIR\".");

    if (categoriaGastoAgregado.toUpperCase() !== "SALIR") {
        montoGastoAgregado = parseInt(prompt("Ingresá el gasto que querés registrar."));
    
        let gastoAgregado = {
            categoria: categoriaGastoAgregado,
            monto: montoGastoAgregado
        }
        gastosMensuales.push(gastoAgregado);

        if (categoriasTotales[categoriaGastoAgregado]) {
            categoriasTotales[categoriaGastoAgregado] += montoGastoAgregado;
        } else {
            categoriasTotales[categoriaGastoAgregado] = montoGastoAgregado;
        }

        if (categoriasContador[categoriaGastoAgregado]) {
            categoriasContador[categoriaGastoAgregado]++;
        } else {
            categoriasContador[categoriaGastoAgregado] = 1;
        }
    }


} while(categoriaGastoAgregado.toUpperCase() !== "SALIR");

function calcularTotalGastos() {
    return gastosMensuales.reduce((acc, gasto) => acc + gasto.monto, 0);
}

function calcularPromedioGastos() {
    let total = calcularTotalGastos();
    let promedio = total / gastosMensuales.length;
    return parseFloat(promedio.toFixed(2));
}

console.log("Gastos mensuales: ", gastosMensuales);
console.log("Total de gastos en el mes: ", calcularTotalGastos());
console.log("Promedio de los gastos en el mes: ", calcularPromedioGastos());
console.log("Cantidad de veces de cada categoría: ", categoriasContador);
console.log("Monto por categoría: ", categoriasTotales);