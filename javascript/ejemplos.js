// Esto es un comentario de JavaScript de una sola línea

/*
Esto es un comentario
de JavaScript
en varias líneas
*/

// en la siguiente línea estoy imprimiento un valor en consola
//console.log('hola, a todos!');

/* VARIABLES */
// Declaración
var nombre1;
let nombre1a;

// declaración e inicialización
var nombre2 = 'pepita';
let nombre2a = 'pepito';

// variable de tipo constante
const miConstante = 1;
//console.log(miConstante);

// automática
// miVariableAutomatica;

let miVariable = 'hola';
//console.log(miVariable);
miVariable = 'hello';
//console.log(miVariable);

/* TIPOS DE DATO PRIMITIVOS */
miVariable = 'Hola, otra vez!';
miVariable = "I'm";
miVariable = 'Él dijo: "Hola"';
miVariable = `Ella dijo: ${nombre2}`;
miVariable = 'Él pensó en: ' + nombre2;
miVariable = '1';
miVariable = 'true';
miVariable = '';

miVariable = 0;
miVariable = 10;
miVariable = 9.5;
miVariable = 0xff;
miVariable = 123e5;
miVariable = -10;

miVariable = true;
miVariable = false;

miVariable = undefined;
//console.log(miVariable);

/* FUNCIONES */
function miFuncion() {
  console.log('Pepita Pérez');
}

//miFuncion();

function miFuncion1(nombre) {
  console.log(nombre);
}

//miFuncion1('Pepita Pérez');
//miFuncion1('Pepito Pérez');

function miFuncion2(apellido = 'Pérez') {
  console.log(apellido);
}

//miFuncion2('Álvarez');
//miFuncion2();

function miFuncion3() {
  //return 'cadena de texto';
}

let valorRetornado = miFuncion3();
//console.log(valorRetornado);


/* OPERADORES */
// aritméticos
//console.log(8 + 4);
//console.log(8 - 4);
//console.log(8 * 4);
//console.log(8 / 4);
//console.log(8 % 4);
//console.log(10 % 3);
//console.log(2 ** 3);

// PEMDAS

// asignación
miVariable = true;

// concatenación
//console.log('Hola, ' + '¿cómo estás?');
//console.log('8' + '4');
//console.log(8 + '4');
//console.log('8' + 4);

// llamado
//console.log();


/*const operacion = 12 / 3 + 2 * 3 - 1;
console.log(operacion)*/





// 


let idioma = "es"; 

const factura = {
  cliente: "BIT Corp",
  numero1: 1021,
  numero2:1022,
  estado: "Completado",
  status: "Completed",
  directorio: "c:\\facturas\\finales\\BIT\\es\\data.txt",
  directory: "c:\\invoices\\final\\BIT\\en\\data.txt"
};

let mensajeFactura = "";

if (idioma === "es") {
  mensajeFactura = `Generando factura para el cliente "${factura.cliente}" ...\nFactura\t#${factura.numero1}\t\t${factura.estado}!\nFactura\t#${factura.numero2}\t\t${factura.estado}!\n\nDirectorio de salida:\n${factura.directorio}`
                  
} else if (idioma === "en") {
  mensajeFactura = `Generating invoice for client "${factura.cliente}" ...\nInvoice\t#${factura.numero1}\t\t${factura.status}!\nInvoice\t#${factura.numero2}\t\t${factura.estado}!\n\nOutput directory:\n${factura.directory}`
} else {
  mensajeFactura = "Idioma no válido.";
}

console.log(mensajeFactura);
