import servidor from './servidor.js';

const puerto = 3000;

servidor.listen(puerto, () => {
  console.log(`Servidor funcionando en http://localhost:${puerto}`);
});