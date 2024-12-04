const mongoose = require("mongoose");

const AulaSchema = new mongoose.Schema({
  clave_aula: { type: String, required: true, unique: true },
  edificio: { type: String, required: true },
  gruposAtendidos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Grupo"
    },
  ],
  descripcionEquipamiento: { type: String, required: true },
});

const Aula = mongoose.model("Aula", AulaSchema);

module.exports = Aula;
