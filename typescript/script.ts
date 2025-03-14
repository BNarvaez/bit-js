/* TIPOS, TIPADO, TYPES */

// Implícito o inferencia de tipo
/* let miVariable = 'hola';
miVariable = '10';
console.log(miVariable); */

// Explícito

/* let nombre: string = 'Brayan'
nombre = 10;
console.log(nombre) */

/* TIPOS DE DATOS */
// primitivos o simples
/* let miString: string = 'abc';
let MiNumber: number = 0;
let miBoolean: boolean = true;
console.log(miString);
console.log(MiNumber);
console.log(miBoolean);
miString = 'xyz';
MiNumber = 1;
miBoolean = false;
console.log(miString);
console.log(MiNumber);
console.log(miBoolean); */

// union de tipos
/* let miUnion: string | number;
miUnion = 10;
console.log(miUnion);
miUnion = 'abc';
console.log(miUnion); */

// especiales
/* let miNull: null = null;
console.log(miNull);
let miUndefined: undefined;
console.log(miUndefined);
let miUnknown: unknown;
miUnknown = 'abc';
miUnknown = 0;
miUnknown = true;
console.log(miUnknown);
let miAny: any;
miAny = 'xyz';
miAny = 1;
miAny = false;
console.log(miAny); */

// arreglos
/* let arr1 = ['b', 0, false, [], {}, () => {}];
arr1 = ['a', 'e', 'i', 'o', 'u'];
arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
let arrString = ['anne', 'jane'];
console.log(arrString);
let arrNumber: number[] = [1, 2];
console.log(arrNumber);
let arrAny: any[] = ['a', 1, true];
console.log(arrAny); */

// tuplas
/* let miTupla: [string, number, boolean];
miTupla = ['pepita', 29, true];
console.log(miTupla); */

// objetos
/* let miObject: object;
miObject = {};
console.log(miObject);
let objPersona1: object;
objPersona1 = {};
objPersona1 = {
  nombre: 'pepita',
  usuario: 'pepa',
  contrasenia: '123',
};
console.log(objPersona1);
let objPersona2: {
  usuario: string;
  contrasenia: string;
  edad: number;
  activo: boolean;
  idGenero?: string;
};
objPersona2 = {
  usuario: 'anne',
  contrasenia: 'ABC',
  edad: 30,
  activo: true,
};
console.log(objPersona2);



/* Enums 
Guardamos o agrupamos constantes, los enums su nombre la primera letra va en mayúscula. Se pueden modificar los valores.
*/

/* enum Perfiles {
    Administrador,
    Vendedor,
    Cliente,
}
console.log(Perfiles);
console.log(Perfiles.Vendedor); */


// Alias
/* Permiten compartir tipos entre diferentes objetos y variables */

/* type NombreEmpleado = string;
type EdadEmpleado = number;
type ActivoEmpleado = boolean;

type Empleado = {
    nombre: NombreEmpleado;
    edad: EdadEmpleado;
    activo: ActivoEmpleado;
}

let miEmpleado: Empleado;

miEmpleado = {
    nombre: 'Brayan',
    edad: 27,
    activo: true,
}

console.log(miEmpleado); */


// Interfaces
/* Compartir tipos. Los tipos Alias son diferentes a los interfaces es porque los alias son tipos primitivos y los interfaces no.*/

/* interface Vendedor {
    id: number;
    nombre: string;
    activo: boolean;
    perfil: string;
}

let miVendedor: Vendedor = {
    id: 1,
    nombre: 'Brayan',
    activo: true,
    perfil: 'Vendedor',
}

console.log(miVendedor); */

 // Funciones
 /*  */

 let valorRetornado: any; // Cualquier tipo de valor

 /* function miFuncion():void {
    return 100;
    console.log('works')
 } */

/* function miFuncion():string {
    return 'works'
} */

/* function miFuncion():number {
    return 10;
} */

/* function miFuncion():boolean {
    return false;
} */

/* function miFuncion(a: number, b: number):number{
    return a + b;
}
 valorRetornado = miFuncion(10,5);
 console.log(valorRetornado); */




 // Casteo
 /* El proceso donde sobreescribimos tipos */

/* let miVariable: unknown = 'abc';

console.log(miVariable);
console.log((miVariable as string).length);
console.log((<string>miVariable).length); */



 