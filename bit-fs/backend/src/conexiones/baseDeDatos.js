
import mongoose from 'mongoose';

class ConexionMongodb {
    constructor() {
        this.conexion();
    }

    async conexion() {

        try {
            const stringDeConexion = process.env.MONGODB_ATLAS;

            await mongoose.connect(stringDeConexion)
            console.log('Conexión a la base de datos establecida');
            
        } catch (error) {
            console.log('Error al conectar a la base de datos', error);
        }

    }
}

export default new ConexionMongodb();