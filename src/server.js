const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configuraciones
const {connectDB, disconnectDB} = require('./config/mongo');
const redisClient = require('./config/redis');

const logger = require('./middlewares/logger');

// Rutas
const alumnoRoutes = require('./routes/alumnoRoutes');
const materiaRoutes = require('./routes/materiaRoutes');
const tecnologicoRoutes = require('./routes/tecnologicoRoutes');
const docenteRoutes = require('./routes/docenteRoutes');
const aulaRoutes = require('./routes/aulaRoutes');
const grupoRoutes = require('./routes/grupoRoutes');
const queryRoutes = require('./routes/queryRoutes');

// Middleware
app.use((req, res, next) => logger(req, res, next, redisClient));
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
// Rutas
app.use('/api/alumnos', alumnoRoutes);
app.use('/api/materias', materiaRoutes);
app.use('/api/tecnologicos', tecnologicoRoutes);
app.use('/api/docentes', docenteRoutes);
app.use('/api/aulas', aulaRoutes);
app.use('/api/grupos', grupoRoutes);
app.use('/api/queries', queryRoutes);


const PORT = process.env.PORT || 3000;

connectDB();

process.on('SIGINT', async () => {
    console.log('Cerrando conexión con Redis...');
    await redisClient.disconnect();
    console.log('Conexión con Redis cerrada');
    await disconnectDB();
    process.exit(0); // Finaliza el proceso
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT} \r\n http://localhost:${PORT}`);
});