
//let miNombre = 'Brayan Narvaez';
//const edad = 27;

// console.log(`Hola, soy ${miNombre} y tengo ${edad} años`);




// Desafio #2
// Crear una función llamada presentarme, dentro crear una variable y asignarle su nombre, crear una constante y asignarle su edad, luego imprimir en consola: Hola, soy ____ y tengo ____ años.

//function presentarme(){
    //let miNombre = 'Brayan Narvaez';
    //const edad = 27;
    //console.log(`Hola, soy ${miNombre} y tengo ${edad} años.`);
//}

// presentarme();






// Desafio #3
// Crear una función que reciba un nombre y edad por parámetros, luego imprimir en consola: Hola, soy ____ y tengo ____ años.

function presentarse(nombre, edad){
    //console.log(`Hola, soy ${nombre} y tengo ${edad} años.`);
}

//presentarse('Brayan', 27)



// Desafio #4

// Crear una función que reciba un nombre, un apellido y una edad por parámetros, la función debe imprimir en consola: Su nombre es ____ y usted tiene ____ años, si no se recibe la edad imprimir: Su nombre es ____ y usted tiene 100 años.

function desafio4(nombre, apellido, edad = 100){
  //console.log(`Su nombre es ${nombre} ${apellido} y usted tiene ${edad} años.`)
}

desafio4('Juan', 'Perez', 25);
desafio4('Juan', 'Perez')



// Desafio #5

//Crear una función que reciba dos párametros, un nombre y un apellido y retorne el nombre completo, primero el apellido y luego el nombre.









// Desafio #6

// Crear una función que reciba cuatro párametros, un nombre, una prenda, un color y una cantidad y retorne: ____ tiene __ ____ de color ____. Ej entrada: pepita, camisas, azul, 2 Ej salida: Pepita tiene 2 camisas de color azul.











// Desafio #7

// Crear una función para saludar, si la función recibe un nombre, imprimir por consola: Hola, ____! Si la función no recibe un nombre, imprimir: Hola, desconocido!












// Desafio #8
/* Crear 5 funciones, (sumar, restar, multiplicar, dividir, modulo), dede recibir 2 numeros e imprimir el resultado asi:
Ej: entrada: 8,4
Ej: salida: 8 + 4 = 12 */

function sumar(a, b){
    const resultado = a + b;
    console.log(`${a} + ${b} = ${resultado}`);
    
}

sumar(8, 4);
sumar(100,25);

function restar(a, b){
    const resultado = a - b;
    console.log(`${a} - ${b} = ${resultado}`);
    
}

restar(8, 4);
restar(100,25);

function multiplicar(a, b){
    const resultado = a * b;
    console.log(`${a} x ${b} = ${resultado}`);
    
}

multiplicar(8, 4);
multiplicar(100,25);

function dividir(a, b){
    const resultado = a / b;
    console.log(`${a} / ${b} = ${resultado}`);
    
}

dividir(8, 4);
dividir(100,25);

function modular(a, b){
    const resultado = a % b;
    console.log(`${a} % ${b} = ${resultado}`);
    
}

modular(8, 4);
modular(100,25);

function potenciar(a, b){
    const resultado = a ** b;
    console.log(`${a} ^${b} = ${resultado}`);
    
}

potenciar(8, 4);
potenciar(100,25);


// PEMDAS