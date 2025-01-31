
// OBJETO GLOBAL    

/* El objeto global es un objeto que existe en todoos los ámbitos. En otras palabras, se puede acceder a él desde cualquier parte del código.
    En un navegador web, el objeto global es:  window.
    En Bodo.js, el objeto global es: global.
*/


// STRING

/* Las cadenas son útiles para almacenar datos que se pueden representar en forma de texto. Algunas de las operaciones más utilizadas en cadenas son verificar su length, para construirlas y concatenarlas usando operadores de cadena +  y +=, verificando la existencia o ubicación de subcadeas con indexOf(). o extraer subcadenas con el método substring().  */

let miString = "  javascript  ";
console.log(miString);
console.log(miString.length);


// Controlar los espacios
console.log(miString.trim());
console.log(miString.trimEnd()); // Quitar los espacios finales.
console.log(miString.trimStart()); // Quitar los espacios iniciales.


// Pasar el string a minúsculas
miString = 'JavaScript';
miString = miString.toLowerCase(); // Minúsculas
miString = miString.toUpperCase(); // Mayúsculas
console.log(miString);


// Reemplazar 
miString = 'JavaScript';
miString = miString.replace('Java', 'Type'); // Reemplazar una palabra por otra.
miString = miString.split(''); // Dividir o partir el string. Y organizan en un array o arreglo. 
miString = miString.slice(4); // Necesita un argumento en indice para iniciar a partir el script.
//console.log(miString[4]);
console.log('miString: ', miString);



// 
/* const largo = miString.length;
const mitad = largo / 2;
console.log(mitad);
miString = miString.slice(mitad);
console.log('miString: ', miString); */


// Recorrer, iterar un String
/* for(let i = 0; i < miString.length; i++){
    console.log(miString[i])
} */


miString = 'JavaScript'
// Como saber si son iguales para comparar los valores
const contrasenia1 = "123ABC";
const contrasenia2 = "123ABC";
const contrasenia3 = "123abc";

console.log(miString);
console.log(contrasenia1);
console.log(contrasenia2);
console.log(contrasenia3);

const sonIguales1 = contrasenia1.match(contrasenia2);
const sonIguales2 = contrasenia1.match(contrasenia3);
console.log(sonIguales1);
console.log(sonIguales2);


// Concatenar

miString = null;
const str1 = "Java";
const str2 = "Script";
// miString = str1 + str2;
miString = str1.concat(str2); // Para concatenar los string.

let resultado = miString.includes('es');
resultado = miString.startsWith('J');
resultado = miString.endsWith('!');
resultado = miString.indexOf('es');
console.log('miString: ', miString);
console.log(resultado)


