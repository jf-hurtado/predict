import mongoose, { connection } from 'mongoose';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect
        (`${process.env.MONGO_URI}`)
        console.log(`[DB] Conexion exitosa 
            con la DB: ${connectionInstance.connection.host}`);
    } catch(err) {
        console.log('[DB] Error conectando la DB', err);
        process.exit(1)
    }
};

export default connectDB;
