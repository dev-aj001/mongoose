const Alumno = require("../models/alumnoModelo");
const Materia = require("../models/materiaModelo");
const Docente = require("../models/docenteModelo");
const Grupo = require("../models/grupoModelo");
const { ObjectId } = require("mongoose").Types;

// Q1. Listar las materias que un alumno ha cursado.
const query1 = async (req, res) => {
    try {
        const alumnoId = req.params.id;
        const alumno = await Alumno.findById(alumnoId)
        .populate("expediente.avanceReticular.materia");
        if (!alumno) {
            return res.status(404).json({ message: "Alumno no encontrado" });
        }

        const materiasCursadas = alumno.expediente.avanceReticular
        .filter(avance => avance.estado !== "Pendiente" );

        res.data = materiasCursadas;
        res.status(200).json(materiasCursadas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Q2. Listar los alumnos que están cursando una materia específica de un grupo específico.
const query2 = async (req, res) => {
    try {
        const grupoId = req.params.grupoId;

        const grupo = await Grupo.findById(grupoId)
        .populate("estudiantes");

        if (!grupo) {
            return res.status(404).json({ message: "Grupo no encontrado" });
        }

        const alumnos = grupo.estudiantes.map(({nombre, nctrl}) => ({ nombre, nctrl }));

        res.data = alumnos;
        res.status(200).json(alumnos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Q3. Listar las calificaciones de un alumno en todas sus materias cursadas.
const query3 = async (req, res) => {
    try {
        const alumnoId = req.params.id;

        const alumno = await Alumno.findById(alumnoId)
        .populate("expediente.avanceReticular.materia");

        if (!alumno) {
            return res.status(404).json({ message: "Alumno no encontrado" });
        }

        const materiasCursadas = alumno.expediente.avanceReticular
        .filter(avance => avance.estado !== "Pendiente" );

        console.log(materiasCursadas);

        const calificaciones = materiasCursadas.map(({ materia, calificacion }) => 
            ({ materia, calificacion })
        );

        res.data = calificaciones;
        res.status(200).json(calificaciones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Q4. Listar los docentes que imparten una materia específica.
const query4 = async (req, res) => {
    try {

        const materiaId = req.params.materiaId;

        // const docentesConMateria = await Docente.find({ materiasImpartidas: materiaId });
        const docentes = await Docente.find();
        const docentesConMateria = docentes.filter(docente => docente.materiasImpartidas.includes(materiaId));

        res.data = docentesConMateria;
        res.status(200).json(docentesConMateria);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Q5. Listar los alumnos que han obtenido una calificación superior a 90 en una materia específica.
const query5 = async (req, res) => {
    try {
        const materiaId = req.params.materiaId;

        const alumnos = await Alumno
        .find({"expediente.avanceReticular":{"$elemMatch": {
                "materia": "675006db95cc0d4bc3dcad89",
                "calificacion": {"$gt": 90}
            }}}
        );

        res.data = alumnos; 
        res.status(200).json(alumnos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Q6. Listar los grupos que correspondan a una materia específica.
const query6 = async (req, res) => {
    try {
        const materiaId = req.params.materiaId;

        const grupos = await Grupo.find({ materia: materiaId });
        // const grupos = await Grupo.find();
        // const gruposConMateria = grupos.filter(grupo => grupo.materia.toString() === materiaId);

        res.data = grupos;
        res.status(200).json(grupos);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Q7. Listar las materias que cursa un alumno en específico (horario).
const query7 = async (req, res) => {
    try {
        const alumnoId = req.params.alumnoId;
        const horario = req.params.horario;

        const grupos = await Grupo
        .find({ horario: horario,estudiantes:
            { $in: [alumnoId] }
        })
        .populate("materia");

        const materias = grupos.map(grupo => ({
            materia: grupo.materia,
            horario: grupo.horario
        }));

        res.data = materias;
        res.status(200).json(materias);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Q8. Listar las materias que faltan por cursar a un alumno en específico.
const query8 = async (req, res) => {
    try {
        const alumnoId = req.params.alumnoId;

        const alumno = await Alumno.findById(alumnoId)
        .populate("expediente.avanceReticular.materia");

        if (!alumno) {
            return res.status(404).json({ message: "Alumno no encontrado" });
        }

        const materiasCursadas = alumno.expediente.avanceReticular
        .filter(avance => avance.estado === "Pendiente" );

        res.data = materiasCursadas;
        res.status(200).json(materiasCursadas);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Q9. Listar las materias que imparte un docente en específico, junto con los alumnos que cursan cada una de las materias.
const query9 = async (req, res) => {
    try {
        const docenteId = req.params.docenteId;

        const grupos = await Grupo.find({ docente: docenteId });

        const lista = grupos.map(grupo => ({
            materia: grupo.materia,
            estudiantes: grupo.estudiantes
        }));

        res.data = lista;
        res.status(200).json(lista);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


module.exports = { 
    query1,
    query2,
    query3,
    query4,
    query5,
    query6,
    query7,
    query8,
    query9
};