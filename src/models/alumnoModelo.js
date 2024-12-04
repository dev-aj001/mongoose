const mongoose = require("mongoose");

const ExpedienteSchema = new mongoose.Schema(
  {
    promedio: { type: Number, required: true },
    estado: { type: String, required: true },
    semestre: { type: Number, required: true },
    especialidad: { type: String, required: true },
    avanceReticular: [
      {
        materia: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Materia",
          required: true,
        },
        estado: { type: String, required: true },
        calificacion: { type: Number, required: true },
        evaluacion: { type: String, required: true },
      },
    ],
  },
  { _id: false }
);

const AlumnoSchema = new mongoose.Schema({
  ID_CURP: { type: String, required: true, unique: true },
  nctrl: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  carrera: { type: String, required: true },
  tecnologico: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tecnologico",
    required: true,
  },
  expediente: ExpedienteSchema,
});

const Alumno = mongoose.model("Alumno", AlumnoSchema);

module.exports = Alumno;
