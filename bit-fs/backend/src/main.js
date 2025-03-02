import 'dotenv/config';
import ConexionMongodb from './conexiones/baseDeDatos.js';
import servidor from './servidor.js';

const puerto = process.env.PORT;

let mensaje = '';

try {
  servidor.listen(puerto, () => {
    mensaje = `Servidor corriendo en el puerto ${puerto}`;
    console.log(mensaje);
});
} catch (error) {
  mensaje = `Error al intentar levantar el servidor: ${error}`;
  console.log(mensaje);
} finally {
  console.log(mensaje);
}


