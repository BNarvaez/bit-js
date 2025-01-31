

// DOM (Document Object Model)

/* Cuando una página web carga, el navegador esta leyendo nuestro html. Y el navegador lee el html y construye el DOM. 
Es la creación que hace el navegador de los códigos que le demos en el html,css,javaScript.
Es como crear un arbol de objetos. 
Crea el objeto  o elemento raiz(root)*/

// Manipulación del DOM

/* OBTENER: 
Utilizando un id en html podemos obtener lo que contenga ese elemento O  los nodos.
*/

// const elementoBody = document.querySelector("body")

// CAMBIAR:
// Cambiar algo dentro del html
// 

/* ELIMINAR */

// elementoRaiz.style.display = 'none'


/* AGREGAR */

// elementoBody.innerHTML = `<p>Hola, soy un párrafo.</p>`



// EVENTOS Y REACTIVIDAD   

/* Los eventos nos permiten hacer que nuestras páginas web sean interactivas. Gracias a ellos, podemos responder a las acciones del usuario y realizar cambios en la página de forma dinámica. */

// const elementoBtnOn = document.getElementById('btnOn');
// const elementoBtnOff = document.getElementById('btnOff');

// elementoBtnOn.addEventListener("click", encender);
// elementoBtnOff.addEventListener("click", apagar);

// function encender (){
//     console.log("Encender funciona");
// }

// function apagar (){
//     console.log("Apagar funciona");
// }

/* La Reactividad: significa que l ainterfaz de usuario se actualiza automáticamente cuando cambian los datos subyacentes.  */








