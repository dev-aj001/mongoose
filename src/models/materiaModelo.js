const mongoose = require('mongoose');

const MateriaSchema = new mongoose.Schema({
    clave: { type: String, required: true, unique: true },
    nombre: { type: String, required: true },
    carrera: { type: String, required: true },
    descripcion: { type: String, required: true },
    plan: { type: String, required: true }
});

const Materia = mongoose.model("Materia", MateriaSchema);

module.exports = Materia;