import mongoose from "mongoose";

const productosSchema = new mongoose.Schema(
    {
        titulo: {type: String, required: true},
        precio: {type: Number, required: true}, 
        imagen: {type: String, required: true},
        descripcion: {type: String, required: true},
    },
    {timestamps: true, versionKey: false}
);

export default mongoose.model("productos", productosSchema); 