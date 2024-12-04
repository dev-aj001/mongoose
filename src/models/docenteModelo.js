const mongoose = require("mongoose");

const DocenteSchema = new mongoose.Schema({
  ID_RFC: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  carrera: { type: String, required: true },
  tecnologico: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tecnologico",
    required: true,
  },
  materiasImpartidas: [
    { type: mongoose.Schema.Types.ObjectId,
      ref: "Materia"
    },
  ],
});


const Docente = mongoose.model("Docente", DocenteSchema);

module.exports = Docente;
