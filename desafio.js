
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
  console.log(`Su nombre es ${nombre} ${apellido} y usted tiene ${edad} años.`)
}

desafio4('Juan', 'Perez', 25);
desafio4('Juan', 'Perez')


