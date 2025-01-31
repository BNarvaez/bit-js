
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

/*function desafio5(nombre, apellido) {
    return  apellido + " " + nombre;
}

let valorRetornado = desafio5('Brayan', 'Narvaez');
let valorRetornado1 = desafio5('Valentina', 'Restan');
console.log(valorRetornado , valorRetornado1)*/



// Desafio #6

// Crear una función que reciba cuatro párametros, un nombre, una prenda, un color y una cantidad y retorne: ____ tiene __ ____ de color ____. Ej entrada: pepita, camisas, azul, 2 Ej salida: Pepita tiene 2 camisas de color azul.


/*function desafio6(nombre, prenda, color, cantidad) {
    return nombre + ' tiene ' + cantidad + ' ' + prenda + ' de color ' + color+'.';
}

let resultado = desafio6('Brayan', 'camisas', 'azul', 3);
let resultado2 = desafio6('Karen', 'vestidos', 'rosado', 2);
console.log(resultado)*/




// Desafio #7

// Crear una función para saludar, si la función recibe un nombre, imprimir por consola: Hola, ____! Si la función no recibe un nombre, imprimir: Hola, desconocido!


function desafio7(nombre = 'desconocido'){
    //console.log(`Hola, ${nombre}!`)
}

desafio7('Brayan');
desafio7();




// Desafio #8
/* Crear 5 funciones, (sumar, restar, multiplicar, dividir, modulo), dede recibir 2 numeros e imprimir el resultado asi:
Ej: entrada: 8,4
Ej: salida: 8 + 4 = 12 */

/*function sumar(a, b){
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
potenciar(100,25);*/



// PEMDAS

// Desafio #9
// - Crear seis funciones, (sumar, restar, multiplicar, dividir, modulo), cada función dede recibir 2 numeros y retornar un resultado según corresponda.

/*function sumar(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

function dividir(a, b){
    return a / b;
}

function modular(a, b){
    return a % b;
}

function potenciar(a, b){
    return a ** b; 
}

// - Crear una función que reciba el nombre de la operación y 2 números, debe imprimir el resultado.


function operar(operacion, a, b){
    if(operacion === 'suma'){
        console.log(`${a} + ${b} = ${sumar(a, b)}`);
    }
    if(operacion === 'resta'){
        console.log(`${a} - ${b} = ${restar(a, b)}`);
    }
    if(operacion === 'multiplicacion'){
        console.log(`${a} * ${b} = ${multiplicar(a, b)}`);
    }
    if(operacion === 'division'){
        console.log(`${a} / ${b} = ${dividir(a, b)}`);
    }
    if(operacion === 'modulo'){
        console.log(`${a} % ${b} = ${modular(a, b)}`);
    }
    if(operacion === 'potencia'){
        console.log(`${a} ^${b} = ${potenciar(a, b)}`);
    }
    
}

operar('suma', 5, 5);
operar('resta', 5, 5);
operar('multiplicacion', 5, 5);
operar('dividir', 5, 5);
operar('modulo', 5, 5);
operar('potencia', 5, 5);*/




// Desafio #10
// Crear una función que reciba 4 números, mostrar el resultado de: a / b * (c + d)

function operar(a,b,c,d){
    const resultado = a / b * (c + d);
    //console.log(resultado)
}

operar(68,2,3,9);






// Desafio # 11
/* Crear una función que reciba 2 números, imprimir el mayor */

function mayor(a, b){
    if(a > b){
        //console.log(a)
    }
    else{
        //console.log(b)
    }
}

mayor(2, 7)


// Desafio # 12
/* Crear una función que reciba un 1 número, imprimir si es negativo o positivo*/

function comparar(a){
    if (a >= 0){
        //console.log('Positivo')
    }
    else{
        //console.log('Negativo')
    }
}
//comparar(5);
//comparar(-5);




// Desafio # 13

/* crear una función que reciba 2 números, imprimir si el primer número divisible por el segundo.*/

function esDivisible(a, b){
    if (a % b === 0){
        //console.log(a + " es divisible por " + b)
    }
    else{
        //console.log(a + " no es divisible por " + b)
    }
}

esDivisible(8,4);
esDivisible(7,5);




// Desafio # 14

/* Crear una función que reciba 1 número, imprimir si es negativo o si es positivo o si es cero */

/*function comparar(a){
    if (a < 0){
        console.log(a + " es Negativo")
    }
    else if(a > 0){
        console.log(a + " es Positivo")
    }
    else{
        console.log('Es Cero')
    }
}

comparar(-2);
comparar(2);
comparar(0);*/



// Desafio # 15


function formulario(){
    
}












