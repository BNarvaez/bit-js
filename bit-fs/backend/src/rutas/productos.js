import express from 'express'

const ruta = express.Router()

// CRUD: Create, Read, Update, Delete

ruta.post("/", (solicitud, respuesta) => {respuesta.send("Crear un producto")})
ruta.get("/", (solicitud, respuesta) => {respuesta.send("Leer todos los productos")})
ruta.get("/:id", (solicitud, respuesta) => {respuesta.send("Leer un producto")})
ruta.put("/:id", (solicitud, respuesta) => {respuesta.send("Actualizar un producto")})
ruta.delete("/:id", (solicitud, respuesta) => {respuesta.send("Eliminar un producto")})

export default ruta