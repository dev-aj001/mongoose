const dotenv = require('dotenv');
dotenv.config();
const mongoose = require ('mongoose');


const connectDB = async () => {
    console.log(process.env.CONNECTION_STRING);
    try {
        const db = await mongoose.connect(process.env.CONNECTION_STRING, {
            dbName: process.env.DATABASE
        });
        console.log('Conexion exitosa a la base de datos : ', db.connection.name);
    } catch (error) {
        console.log('Error en la conexion: ', error);
    }
};

const disconnectDB = async () => {
    try {
        await mongoose.disconnect();
        console.log('Desconectado de la base de datos');
    } catch (error) {
        console.log('Error al desconectar de la base de datos: ', error);
    }
};

module.exports = {connectDB, disconnectDB};