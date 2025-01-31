'use strict';

// ARREGLOS O ARRAY

let miArray = new Array();
miArray = new Array('a', 'b', 'c');
miArray = [];
miArray = ['manzana', 'pera', 'banano', 'piña', 'kiwi', 'uva' , 'fresa'];
let resultado = miArray.length;
const miMatriz = [[],[],[]];
const pares = [2,4,6,8];
const impares = [1,3,5,7,9];
resultado = miArray[1];
resultado = miArray.at(5); // Llamar un elemento.
resultado = miArray.join(', '); // Me retorna los elementos de un arreglo en un string.
miArray.pop(); // Remueve el ultimo elemento.
miArray.push('naranja'); // Agrega un nuevo elemento pero al final.
resultado = miArray.shift(); //Remueve el primer elemento.
miArray.unshift('limón'); // Agregar al principio.
miArray[2] = 'banana'; // Canviar un elemento con el indice.
resultado = impares.concat(pares, miArray);
resultado = miArray.copyWithin(2,0); // Reescribir lo que tenga el array.
// Buscar 
resultado = miArray.indexOf('piña');
resultado = miArray.includes('kiwi');
miArray = ['manzana', 'pera', 'banano', 'piña', 'kiwi', 'uva' , 'fresa'];
resultado = miArray.sort(); // Altera el arreglo original, en orden alfabetico.
miArray = ['manzana', 'pera', 'banano', 'piña', 'kiwi', 'uva' , 'fresa'];
resultado = miArray.reverse(); // Lo ordena en reversa.
console.log('miArray:', miArray);
console.log('Resultado:', resultado);
console.log(typeof miArray);
console.log(miArray instanceof Array); // Validar si es un dato no primitivo.
// 