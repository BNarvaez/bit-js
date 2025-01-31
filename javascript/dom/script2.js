
// #2

/*2. Crear un formulario para que el usuario ingrese: usuario y contraseña, al
hacer click al botón de enviar mostrarle al usuario una ventana emergente
informando que se esta procesando la solicitud, almacenar los datos ingresados
en variables, imprimir por consola los valores de las variables.
*/

/* const $formLogin = document.getElementById('formLogin');

$formLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Se esta procesando la solicitud');
    const nombre = $formLogin.nombre.value
    const pass = $formLogin.pass.value
    console.log('Nombre: '+ nombre);
    console.log('Contraseña: ' + pass);
});
 */



// #3

/* 
Con base en el desafio #2 => La contraseña debe tener 10 caracteres, mostrar una alerta si no se cumple esta condición.
*/

/* const $formLogin = document.getElementById('formLogin');

$formLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const nombre = $formLogin.nombre.value
    const pass = $formLogin.pass.value

    if(pass.length === 10 ){
        alert('Se esta procesando la solicitud');
    }else{
        alert('La contraseña no cumple con la condición. Debe tener al menos 10 caracteres.')
    }
    console.log('Nombre: '+ nombre);
    console.log('Contraseña: ' + pass);
}); */



// #4

/* 
Con base en el desafío #3 =>
- Quitar espacios en blanco al inicio y al final de todos los campos.
- La contraseña debe tener por lo menos un caracter especial (!$#+-?.)
- Imprimir por consola cuantas vocales tiene cada campo.
*/

const $formLogin = document.getElementById('formLogin');

$formLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const nombre = $formLogin.nombre.value.trim();
    const pass = $formLogin.pass.value.trim();
    const especial = /[!?#$+-.]/;

    
    let contarVocalesNombre = nombre.match(/[aeiou]/g);
    const contarNombre = contarVocalesNombre.length;
    let contarVocalesPass = pass.match(/[aeiuo]/g);
    const contarPass = contarVocalesPass.length;


    if(pass.length === 10 && especial.test(pass)){
        alert('Se esta procesando la solicitud'); 
    }else{
        alert('La contraseña no cumple con la condición. Debe tener al menos 10 caracteres y un carácter especial.')
    }
    
    console.log('Nombre: '+ nombre + ', Vocales: '+ contarNombre);
    
    console.log('Contraseña: ' + pass + ', Vocales: '+ contarPass);
})


