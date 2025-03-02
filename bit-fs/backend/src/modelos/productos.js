import mongoose from 'mongoose';
import ProductosSchema from '../schemas/productos.js';

class ProductosModel {
    async create(producto) {
        return await ProductosSchema.create(producto);
    }

    async getAll() {
        return await ProductosSchema.find();
    }
    
    async getOne(id) {
        return await ProductosSchema.findById(id);
    }
    
    async update(id, producto) {
        return await ProductosSchema.findOneAndUpdate(
          { _id: new mongoose.Types.ObjectId(id) },
          producto
        );
    }
    
    async delete(id) {
        return await ProductosSchema.findOneAndDelete({
          _id: new mongoose.Types.ObjectId(id),
        });
    }
}

export default new ProductosModel();