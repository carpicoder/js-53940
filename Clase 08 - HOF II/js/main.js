// console.log( Math.E );
// console.log( Math.PI );

// console.log(Math.max(12, 24, 9, 5, 1, 14)); // 24
// console.log(Math.min(12, 24, 9, 5, 1, 14)); // 1

// console.log(Math.max(12, 24, 9, 5, 1, Infinity, 14)); // 1
// console.log(Math.min(12, 24, 9, 5, 1, -Infinity, 14)); // 1

// const arr = [12, 24, 9, 5, 1, 14];

// const suma = arr.reduce((acc, num) => acc + num, 0);
// console.log(suma);

// const max = arr.reduce((acc, num) => Math.max(acc, num), -Infinity);

// const max2 = Math.max.apply(null, arr);
// const min2 = Math.min.apply(null, arr);

// console.log( Math.ceil(4.1) ); // Techo
// console.log( Math.floor(4.9) ); // Piso
// console.log( Math.round(4.9) ); // Redondear al entero más cercano
// console.log( Math.round(4.1) ); // Redondear al entero más cercano
// console.log( Math.round(4.499999999999999) ); // Redondear al entero más cercano

// console.log( Math.sqrt(9) );

// console.log( Math.random() );
// console.log( Math.floor(Math.random() * 31 + 20) );

// const numerito = 3.1456598976556;
// console.log(parseFloat(numerito.toFixed(3)));

// console.log(parseInt("20px"));


// const finalMundial = new Date(2022, 11, 18, 17, 59, 15);
// const fechaActual = new Date();

// console.log(finalMundial);
// console.log(finalMundial.toDateString());
// console.log(finalMundial.toLocaleString());
// console.log(finalMundial.toLocaleDateString());
// console.log(finalMundial.toTimeString());
// console.log(finalMundial.getFullYear());
// console.log(finalMundial.getMonth());
// console.log(finalMundial.getDay());

// console.log(fechaActual - finalMundial);
// const milisegundosPorDia = 86400000;

// console.log(Math.floor((fechaActual - finalMundial) / milisegundosPorDia));

// const inicio = new Date();
// for (let i = 0; i < 10000; i++) {
//     console.log("Haciendo tiempo...");
// }
// const final = new Date();

// console.log(final - inicio);