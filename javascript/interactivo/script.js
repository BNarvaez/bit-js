'use strict';


/* Interaccion*/


// Entradas | Input

// 16
// const dato = prompt();
// const nombreUsuario = prompt('Por favor, ingrese su nombre:')
// console.log(nombreUsuario);

//17
// const nombre = prompt('Ingrese su Nombre: ');
// const apellido = prompt('Ingrese su Apellido');

// alert(nombre + '' + apellido)

//18
// const nombre = prompt('Ingrese su Nombre:');
// const apellido = prompt('Ingrese su Apellido: ');
// const edad = prompt('Ingrese su Edad: ');

// document.write(apellido + ' ' + nombre + ' tienes ' + edad+ ' años.')




/*Salidas | Output */

/*
console.log(); // Ver en consola
document.write(); // Ver en pagina web
alert('Funciona!'); // Ver en una ventana emerguente

*/

/* Bloque y Ambito de las variables | Scope */

// const numeroGlobal = 10
// console.log(numeroGlobal)

// var textoGlobal = 'Hola'
// console.log(textoGlobal)

// {
//     const numeroLocal = 11
//     console.log(numeroLocal)

//     console.log(textoGlobal)
// }


// 19

// const nombre = prompt('Ingrese su nombre: ')
// alert("El tipo de dato ingresado es: '" + typeof nombre + "'")

// document.write('El valor ingresado es: "'+ nombre + '"')



// 20

// const nombre = prompt('Ingrese su nombre: ')
// const edad = prompt('Ingrese su edad: ')
// const pregunta = prompt('¿Está activo Si o No?: ')

// console.log("El tipo de dato ingresado es: '" + typeof nombre + "' , '" + typeof edad + "' , '" + typeof pregunta + "'")

// document.write("El nombre ingresado es: '" + nombre + "'")

// alert('"' + pregunta + '" está autorizado')


// CONVERSION DE TIPOS 

// const num1 = '4'
// const num2 = '3'

// const resultado = num1 + num2 
// console.log(resultado)


// let convertido = Number('4')
// convertido = parseInt('4') // Utilizar
// convertido = parseFloat('4.5')
// convertido = +'5'
// console.log(convertido)
// console.log(typeof convertido)




// 21

// Solicitar al usuario que ingrese tres números, mostrarle al usuario el resultado de las cuatro operaciones aritmeticas básicas.

// let num1 = prompt('Ingrese un primer número: ')
// const conversion1 = Number(num1)

// let num2 = prompt('Ingrese un segundo número: ')
// const conversion2 = Number(num2)

// let num3 = prompt('Ingrese un tercer número: ')
// const conversion3 = Number(num3)



// const resultadoSuma = (conversion1 + conversion2 + conversion3)
// document.write('El resultado de la suma es: ' + resultadoSuma)

// const resultadoResta = (conversion1 - conversion2 - conversion3)
// document.write(' <br> El resultado de la resta es: ' + resultadoResta)

// const resultadoMulti = (conversion1 * conversion2 * conversion3)
// document.write(' <br> El resultado de la 5multiplicación es: ' + resultadoMulti)

// const resultadoDivi = (conversion1 / conversion2 / conversion3)
// document.write('<br> El resultado de la división es: ' + resultadoDivi)


/* EXPRESIONES BOOLEANAS */

// Truthy

// console.log(true)
// console.log(1);
// console.log(-1);
// console.log('a');
// console.log('a...');

// Falsy
// console.log(false);
// console.log(0);
// console.log('');
// console.log(undefined);
// console.log(null); 

// const valor1 = null;

// if (valor1) {
//   console.log('El valor el TRUTHY');
// } else {
//   console.log('El valor el FALSY');
// } 





// 22 
/* solicitar que el usuario ingrese un texto (cualquier) y mostrarle al usuario el texto ingresado entre comillas sencillas. Si el usuario no ingresa un texto mostrarle una alerta indicando su error. */

// const texto = prompt('Por favor ingresar un texto: ')

// if (texto) {
//     document.write("'" + texto + "'")
// }
// else{
//     alert('ERROR, no has ingresado ningún texto.')
// }






// const valor = 'abc';

// switch (valor) {
//   case 'a':
//     console.log("es 'a'");
//     break;
//   case 'b':
//     console.log("es 'b'");
//     break;
//   case 'c':
//     console.log("es 'c'");
//     break;
//   default:
//     console.log("No es ni 'a' ni 'b' ni 'c'");
//     break;
// }




// 24

/* Solicitar al usuario código de acceso, si el código es: 
- AAA: mostrar acceso a administrador
- BBB: mostrar acceso a profesor
- CCC: mostrar acceso a estudiante
- DDD: mostrar acceso a acudiente
De otro modo informar que no tiene un código válido */

// const password = prompt('Por favor, ingresar su código de acceso: ');

// switch (password) {
//     case 'AAA': 
//         alert('Bienvenido señor Administrador');
//         break;
//     case 'BBB':
//         alert('Bienvenido  señor Profesor');
//         break;
//     case 'CCC':
//         alert('Bienvenido querido Estudiante');
//         break;
//     case 'DDD':
//         alert('Bienvenido señor Acudiente');
//         break;
//     default:
//         alert('Usted, no esta ingresando un código válido.')
//         break;
// }



// CICLOS | LOOPS | BUCLES

// Contador

// for(let contador = 0 ; contador < 5 ; contador++ ) {
//     console.log('algo')
// }


// 25
/* 
Solicitar al usuario un número entero positivo, mostrar al usuario los números desde cero hasta el número ingresado
*/

// const entero = prompt('Ingrese un número entero: ')

// for( let contador = 0; contador <= entero ; contador++) {
//     document.write(contador)
// }



// 26

/* 
Solicitar al usuario un número entero positivo, mostrar al usuario los números desde cero hasta el número ingresado cada número en una linea
*/

// const entero = prompt('Ingrese un número entero: ')

// for( let contador = 0; contador <= entero ; contador++) {
//     document.write(contador + '<br>')
// }


// 27

/* 
Solicitar al usuario un número entero positivo, mostrar al usuario los números desde 1 hasta el número ingresado menos 1 cada número debe estar separado por una coma y un espacio, el número final dede terminar con punto.
*/

// const entero = prompt('Ingrese un número entero: ')

// for( let contador = 1; contador < entero ; contador++) {
//     if (contador === entero - 1){
//         document.write(contador + '. ' )
//     } else{
//         document.write(contador + ', ' )
//     }
// }


// contador

// let contador = 0;

// while(contador < 3) {
//     console.log(contador);
//     contador++;
// }



// 28

/* 
Solicitar al usuario un número entero positivo, mostrar al usuario las
tablas de multiplicar desde cero hasta el número ingresado.
Ej entrada: 2
Ej salida: 0 x 0 = 0 ...
*/

// const num = parseInt(prompt('Por favor ingresar un número: '))

// for ( let contador = 0; contador <= num; contador++) {
//     document.write('Tabla del ' + contador + ' <br>')
//     for(let i = 0; i <= 10; i++) {
//         let resultado = i * num;
//         document.write(i + ' x ' + num + ' = ' + resultado + '<br>')
//     }
// }




// Por si acaso lo nesito
    // if(respuesta < 1 || respuesta > 9){
    //     alert('Por favor, ingrese un número entre 1 al 9.')
    //     continue;
    // }



// 29
 /* 
 
 Crear una constante y asignarle un número entre 1 y 9. Solicitar al usuario que adivine el número, permitir máximo 3 intentos. 

 */

// const numSecreto = 8;


// let intentos = 0;
// const maximoIntentos = 3;

// while(intentos < maximoIntentos)  {
//     const respuestaUsuario = parseInt(prompt(`Intento ${intentos + 1} de 3. Adivine el número entre 1 y 9:  `))

//      if(respuesta < 1 || respuesta > 9){
//     alert('Por favor, ingrese un número entre 1 al 9.')
//     continue;
// }


//     if(respuestaUsuario === numSecreto){
//         alert('Haz adivinado el número secreto!!')
//         break;
//     }else{
//         alert('Incorrecto. Intenta de nuevo');
//     }

//     intentos++;

//     if(intentos === maximoIntentos){
//         alert('Lo siento, alcanzaste el limite de intentos. El número secreto era ' + numSecreto)
//     }
// }






// TIPOS DE DATOS NO PRIMITIVOS
/* 
arreglos, arrays, vectores, listas, matriz
*/

// const estudiantesGirl = ['Alexandra', 'Manuela', 'Valentina'];
// const estudiantesBoy = ['Daniel', 'Juan', 'Nicolas', 'Sergio', 'Alvaro', 'Brayan'];

// for( let i = 0; i < estudiantesGirl.length; i++){
//     document.write(estudiantesGirl[i] + ' <br>');
// }

 
// let contador = 0;

// while(contador < estudiantesBoy.length){
//     document.write(estudiantesBoy[contador] + ' <br>');

//     contador++;
// }




// #30

/* 
Solicitar al usuario la cantidad de materias a ingresar, solicitar el nombre de cada materia y mostrar al final los nombres de todas las materias ingresadas.  

*/

// const numMaterias = prompt('Ingrese el número de materias: ');
// const nombresMaterias = [];

// for(let i = 0; i < numMaterias; i++){
//     nombresMaterias[i] = prompt('Ingrese el nombre de cada materias: ');
// }

// document.write(nombresMaterias + ' <br>')




// OBJETOS, OBJETOS LITERALES

// #31

/* 
Solicitar al usuario los datos necesarios para un registro médico, mostrar en la interfaz del resumen de los datos ingresados. 

*/

const datosMedicos = {
    nombre: prompt('Ingrese el nombre del paciente: '),
    apellido: prompt('Ingrese los apellidos del paciente: '),
    edad: prompt('ingrese la edad: '),
    id: prompt('Ingrese la fecha de nacimiento: '),
    genero: prompt('Ingrese su genero: '),
    peso: prompt('Ingrese el peso: '),
    altura: prompt('Ingrese la altura: '),
};

document.write(`
    Nombre: ${datosMedicos.nombre} <br> 
    Apellidos: ${datosMedicos.apellido} <br> 
    Edad:  ${datosMedicos.edad} <br>  
    Documento de Identidad: ${datosMedicos.id} <br>  Género: ${datosMedicos.genero} <br>  
    Peso: ${datosMedicos.peso} <br> 
    Altura: ${datosMedicos.altura}
`);















