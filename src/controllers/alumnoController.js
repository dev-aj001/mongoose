const Alumno = require("../models/alumnoModelo");
const Materia = require("../models/materiaModelo");

const Validator = require('../validation/validator');

const getAlumnos = async (req, res) => {
    try {
        const alumnos = await Alumno.find()
        .populate("tecnologico")
        .populate("expediente.avanceReticular.materia");

        res.data = alumnos;
        res.status(200).json(alumnos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAlumno = async (req, res) => {
    try {
        const alumno = await Alumno.findById(req.params.id)
        .populate("tecnologico")
        .populate("expediente.avanceReticular.materia");

        res.data = alumno;
        res.status(200).json(alumno);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createAlumno = async (req, res) => {
    try {
        const { error, value } = Validator.alumno.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        value.expediente.promedio = 0;

        const carrerasValidas = {
            'Sistemas': 'Sistemas',
            'Civil': 'Civil',
            'Industrial': 'Industrial',
            'Electrónica': 'Electrónica',
            'Mecánica': 'Mecánica',
            'Arquitectura': 'Arquitectura',
            'Administración': 'Administración'
        };

        const carreraSeleccionada = carrerasValidas[value.carrera];
        if (!carreraSeleccionada) {
            return res.status(400).json({ error: 'La carrera seleccionada no es válida.' });
        }

        const materias = await Materia.find({"carrera": {"$in": ["Todas las Carreras", carreraSeleccionada]}});

        if (!materias.length) {
            return res.status(404).json({ error: `No se encontraron materias para la carrera ${carreraSeleccionada}` });
        }

        value.expediente.avanceReticular = materias.map(materia => ({
            materia: materia._id,
            estado: 'Pendiente',
            calificacion: 0,
            evaluacion: 'N/A'
        }));

        const alumno = await Alumno.create(value);

        res.data = alumno;
        res.status(201).json(alumno);
    } catch (error) {
        //console.log(error);
        if(error.code === 11000){
            res.status(400).json({ error: "Un alumno con el mismo CRUP ID ya existe" });
        }
        res.status(500).json({ error: error });
    }
};

const updateAlumno = async (req, res) => {
    try {
        const { error, value } = Validator.alumnoUpdate.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const alumno = await Alumno.findById(req.params.id);
        if (!alumno) {
            return res.status(404).json({ error: 'Alumno no encontrado' });
        }

        alumno.nombre = value.nombre || alumno.nombre;
        alumno.expediente.semestre = value.expediente.semestre ?? alumno.expediente.semestre;
        alumno.expediente.especialidad = value.expediente.especialidad || alumno.expediente.especialidad;
        alumno.expediente.estado = value.expediente.estado || alumno.expediente.estado;

        // Actualizar
        const updatedAlumno = await Alumno.findByIdAndUpdate(
            req.params.id,
            { $set: alumno },
            { new: true }
        );

        res.data = updatedAlumno;
        res.status(200).json(updatedAlumno);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// const deleteAlumno = async (req, res) => {
//     try {
//         const alumno = await alumnoModel.findByIdAndDelete(req.params.id);
//         res.status(200).json(alumno);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

const calificarMateria = async (req, res) => {
    try {
        // Obtener el id de alumno
        const alumno = await Alumno.findById(req.params.id);

        // Validar el cuerpo de la solicitud
        const { error, value } = Validator.materiaAvanceUpdate.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        // Obtener el id de la materia
        const materia = value._id;

        // Validar que exista del alumno
        if (!alumno) {
            return res.status(404).json({ error: "Alumno no encontrado" });
        }

        // Validar que exista la materia
        const materiaToUpdate = alumno.expediente.avanceReticular.find(m => m.materia._id.toString() === materia);
        if (!materiaToUpdate) {
            return res.status(404).json({ error: "Materia no encontrada en avance reticular" });
        }

        // Actualizar la materia
        materiaToUpdate.calificacion = value.calificacion;
        materiaToUpdate.evaluacion = value.evaluacion;
        materiaToUpdate.estado = (materiaToUpdate.calificacion >= 70) ? "Aprobado" : "Reprobado";

        // Guardar el alumno y materia actualizados
        await alumno.save();

        res.data = materiaToUpdate;
        // Responder con el alumno actualizado
        res.status(200).json(materiaToUpdate);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAlumnos,
    getAlumno,
    createAlumno,
    updateAlumno,
    calificarMateria
};