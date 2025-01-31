'use strict';

// NUMBER


let miNumber = 123; //Enteros
miNumber = 1.5; // Decimales
miNumber = 8 - 4; // De operaciones
miNumber = 2.5e3; // Potencias
miNumber = 0xa; // Hexadecimal
miNumber = 0b1010; // Binario
miNumber = new Number(10); // Método constructor



// PROPIEDADES Y MÉTODOS

const valorMaximo = Number.MAX_VALUE; // Mirar el valor maximo.
// console.log(valorMaximo);
const valorMinimo = Number.MIN_VALUE; // Mirar el valor minimo.
// console.log(valorMinimo);

let resultado = -1 / 0;
resultado = 1 / 0;
resultado = 10 / 'abc';
resultado = Number.isFinite(10); // Verificar si finito si esta dentro de lo normal.
resultado = isNaN(10); // NaN - Not a Number
resultado = isNaN('abc');
resultado = Number.isInteger(10.5); // Validar si es un entero.
resultado = Number.isInteger(5);
miNumber = 10.123456789;
resultado = miNumber.toFixed(); // Mostrar solo la parte que es entera.
resultado = miNumber.toFixed(2); // Se le pone como atributo la cantidad de decimal que uno quiera.
miNumber = 1234;
resultado = miNumber.toExponential(); // Cantidad de exponentes.
resultado = miNumber.toExponential(1);
resultado = miNumber.toExponential(20);
miNumber = 10.123456789;
resultado = parseInt(miNumber); // Parcear números.
miNumber = 11;
resultado = parseFloat(miNumber);
resultado = 0.2 + 0.1;
resultado = (0.2 * 10 + 0.1 * 10) / 10;
resultado = miNumber.toString(); // Convertir al tipo de dato String.
console.log('miNumber:', miNumber);
console.log('resultado: ', resultado);
console.log(typeof miNumber);
console.log(typeof resultado);


