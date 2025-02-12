'use strict';

/* Usted puede tener funciones apartes y exportales a donde las necesite */











// DESTRUCTURAR
/* Sacar los elementos que solo se necesiten */

/* const arrNevera = ['hielo', 'leche', 'jamón', 'lechuga', 'tomate', 'ajo', 'queso']

const [elementos1, elementos2] = arrNevera // Los nombres pueden ser cualquiera.
console.log(elementos1, elementos2); */


/* const objNevera = {
    a: 'hielo',
    b: 'leche',
    c: 'jamón',
    d: 'lechuga',
    e: 'tomate',
    f: 'ajo',
    g: 'queso',
}

const {b, c, d, f} = objNevera
console.log(b,c,d,f); */


// REST ARGUMENTOS | SPREAD OPERATOR
/* Se utilizan 3 puntos (...) para unir todos los valores en un solo arreglo */

/* const arrEllas = ['Alexandra', 'Manuela', 'Valentina']
const arrELlos = ['Brayan', 'Daniel', 'Javier', 'Juan', 'Sergio']

console.log([...arrEllas, ...arrELlos]); */


/* const arrNumeros = [2,4,5]

function sumarTresNumeros (n1, n2, n3) {
    console.log(n1 + n2 + n3)
}

sumarTresNumeros(...arrNumeros) */



// SINCRÓNICO 
/*  */

/* function fnSincrona() {
    console.log('Hola, soy fn sincrónica');
    console.log(1);
    console.log(2);
    console.log(3);
    console.log('Adiós, soy fn sincrónica');
}

fnSincrona() */



// PROMESAS
/* Representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante. */

/* function miPromesa() {
    return new Promise((resolver, rechazar) => {
        resolver('resuelto')
        rechazar('rechazado')
    })
}

const resultadoPromesa = miPromesa()
resultadoPromesa.this((datos) => {
    console.log('datos:', datos)
})
.catch((error) => {
    console.log('Error:', error)
}) */


//ASÍNCRONO



function miPromesa() {
    return new Promise((resolver, rechazar) => {
        resolver('resuelto')
        // rechazar('rechazado')
    })
}

const resultadoPromesa = miPromesa()
resultadoPromesa
    .then((datos) => {
        console.log('datos:', datos)
    })
    .catch((error) => {
        console.log('Error:', error)
    })

