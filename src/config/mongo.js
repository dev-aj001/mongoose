const { MONGO_URI, DATABASE } = process.env;
const mongoose = require ('mongoose');

const connectDB = async () => {
    console.log(MONGO_URI);
    try {
        const db = await mongoose.connect(MONGO_URI, {
            dbName: DATABASE
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