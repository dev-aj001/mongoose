/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('tecnologico');

// Q1. Listar las materias que un alumno ha cursado.
const alumnoId = ObjectId("6751bb899b34a54ce9457246");
db.getCollection('alumnos').aggregate([
  { $match: { _id: alumnoId } },
  { $unwind: "$expediente.avanceReticular" },
  {
    $lookup: {
      from: "materias",
      localField: "expediente.avanceReticular.materia",
      foreignField: "_id",
      as: "materiaInfo"
    }
  },
  { $unwind: "$materiaInfo" },
  { $match: { "expediente.avanceReticular.estado": { $ne: "Pendiente" } } },
  { $project: { "materiaInfo.nombre": 1, _id: 0 } }
]);

// Q2. Listar los alumnos que están cursando una materia específica de un grupo específico.
const grupoId = ObjectId("ID_DEL_GRUPO");
db.getCollection('grupos').aggregate([
  { $match: { _id: grupoId } },
  {
    $lookup: {
      from: "alumnos",
      localField: "estudiantes",
      foreignField: "_id",
      as: "alumnos"
    }
  },
  { $project: { "alumnos.nombre": 1, "alumnos.nctrl": 1, _id: 0 } }
]);

// Q3. Listar las calificaciones de un alumno en todas sus materias cursadas.
db.getCollection('alumnos').aggregate([
  { $match: { _id: alumnoId } },
  { $unwind: "$expediente.avanceReticular" },
  {
    $lookup: {
      from: "materias",
      localField: "expediente.avanceReticular.materia",
      foreignField: "_id",
      as: "materiaInfo"
    }
  },
  { $unwind: "$materiaInfo" },
  { $project: { materia: "$materiaInfo.nombre", calificacion: "$expediente.avanceReticular.calificacion", _id: 0 } }
]);


// Q4. Listar los docentes que imparten una materia específica.
const materiaId = ObjectId("ID_DE_LA_MATERIA");
db.getCollection('docentes').find({ materiasImpartidas: materiaId }, { nombre: 1, _id: 0 });

// Q5. Listar los alumnos que han obtenido una calificación superior a 90 en una materia específica.
db.getCollection('alumnos').find({
  "expediente.avanceReticular": {
    $elemMatch: { materia: materiaId, calificacion: { $gt: 90 } }
  }
}, { nombre: 1, nctrl: 1 });

// Q6. Listar los grupos que corresponden a una materia específica.
db.getCollection('grupos').find({ materia: materiaId }, { nombre: 1, _id: 0 });

// Q7. Listar las materias que cursa un alumno en específico (horario).
const horario = "HORARIO_ESPECÍFICO";
db.getCollection('grupos').aggregate([
  { $match: { horario: horario, estudiantes: { $in: [alumnoId] } } },
  {
    $lookup: {
      from: "materias",
      localField: "materia",
      foreignField: "_id",
      as: "materiaInfo"
    }
  },
  { $project: { materia: "$materiaInfo.nombre", horario: 1, _id: 0 } }
]);

// Q8. Listar las materias que faltan por cursar a un alumno en específico.
db.getCollection('alumnos').aggregate([
  { $match: { _id: alumnoId } },
  { $unwind: "$expediente.avanceReticular" },
  {
    $lookup: {
      from: "materias",
      localField: "expediente.avanceReticular.materia",
      foreignField: "_id",
      as: "materiaInfo"
    }
  },
  { $unwind: "$materiaInfo" },
  { $match: { "expediente.avanceReticular.estado": "Pendiente" } },
  { $project: { "materiaInfo.nombre": 1, _id: 0 } }
]);

// Q9. Listar las materias que imparte un docente en específico, junto con los alumnos que cursan cada una de las materias.
const docenteId = ObjectId("ID_DEL_DOCENTE");
db.getCollection('grupos').aggregate([
  { $match: { docente: docenteId } },
  {
    $lookup: {
      from: "materias",
      localField: "materia",
      foreignField: "_id",
      as: "materiaInfo"
    }
  },
  {
    $lookup: {
      from: "alumnos",
      localField: "estudiantes",
      foreignField: "_id",
      as: "alumnosInfo"
    }
  },
  {
    $project: {
      materia: { $arrayElemAt: ["$materiaInfo.nombre", 0] },
      alumnos: { $map: { input: "$alumnosInfo", as: "alumno", in: { nombre: "$$alumno.nombre" } } },
      _id: 0
    }
  }
]);