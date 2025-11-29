import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const mongo_uri = process.env.MONGO_URI;
        await mongoose.connect(`${mongo_uri}`)
        console.log(`[DB] Conexion exitosa con la DB: ${mongo_uri}`);
    } catch(err) {
        console.log('[DB] Error conectando la DB', err);
        process.exit(1);
    }
};

export default connectDB;
