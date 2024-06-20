import mongoose from "mongoose";

type ConnectionObecjt = {
    isConnected?: number
}

const connection: ConnectionObecjt = {}

async function dbConnect(): Promise<void> {
    if(connection.isConnected){
        console.log("Already connected to DataBase");
        return;
    }
    try{
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {})
        connection.isConnected = db.connections[0].readyState
        console.log("DB Connected Successfully")
    } catch(error){
        console.log("Database connection failed ", error);

        process.exit(1);
    }
}

export default dbConnect;