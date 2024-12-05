/** 
 * Archivo para configurar la conexión a Redis.
 * 
 * Exporta el cliente a la base de redis.
 * **/

const { REDIS_HOST, REDIS_PORT } = process.env;

const redis = require('redis');

// Configuración de Redis
const redisClient = redis.createClient({
    socket: {
        port: REDIS_PORT,
        host: REDIS_HOST
    }
});

// Manejador de eventos para la conexión
redisClient.on('connect', () => {
    console.log('Conectado a Redis');
});

redisClient.on('error', (err) => {
    console.error('Error en la conexión a Redis:', err);
});

redisClient.connect();


module.exports = redisClient;