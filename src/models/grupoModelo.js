const mongoose = require('mongoose');

const GrupoSchema = new mongoose.Schema({
    clave_grupo: { type: String, required: true },
    materia: { type: mongoose.Schema.Types.ObjectId, ref: 'Materia', required: true },
    docente: { type: mongoose.Schema.Types.ObjectId, ref: 'Docente', required: true },
    estudiantes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Alumno', required: true }],
    aula: { type: mongoose.Schema.Types.ObjectId, ref: 'Aula', required: true },
    horario: { type: String, required: true },
});

const Grupo = mongoose.model("Grupo", GrupoSchema);

module.exports = Grupo;