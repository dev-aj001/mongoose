const mongoose = require("mongoose");

const TecnologicoSchema = new mongoose.Schema({
  clave_tecnologico: { type: String, required: true },
  nombre: { type: String, required: true },
  ubicacion: { type: String },
});

const Tecnologico = mongoose.model("Tecnologico", TecnologicoSchema);

module.exports = Tecnologico;
