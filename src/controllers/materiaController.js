const Materia = require("../models/materiaModelo");

const Validator = require('../validation/validator');

const getMaterias = async (req, res) => {
    try {
        const materias = await Materia.find();

        res.data = materias;
        res.status(200).json(materias);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

const getMateria = async (req, res) => {
    try {
        const materia = await Materia.findById(req.params.id);
        if(!materia){
            return res.status(400).json({ message: "Materia no encontrada" });
        }

        res.data = materia;
        res.status(200).json(materia);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

const createMateria = async (req, res) => {
    try {
        const { error, value } = Validator.materia.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const materia = await Materia.create(value);
        res.data = materia;
        res.status(201).json(materia);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: "Código de materia ya registrado" });
        }
        res.status(500).json({ error: error.message});
    }
};

const updateMateria = async (req, res) =>{
    try {
        const { error, value } = Validator.materiaUpdate.validate(req.body);
        if(error){
            return res.status(400).json({ error: error.details[0].message });
        }
        
        const materia = await Materia.findByIdAndUpdate(req.params.id, value);
        if(!materia){
            return res.status(404).json({ message: "Materia no encontrada" });
        }
        res.data = materia;
        res.status(200).json(materia);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
}

const deleteMateria = async (req, res) =>{
    try {
        const materiaEliminada = Materia.findByIdAndDelete(req.params.id);
        if(!materiaEliminada){
            return res.status(400).json({ error: error.details[0].message });
        }
        res.data = materiaEliminada;
        res.status(200).json(materiaEliminada);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
}

module.exports = {
    getMaterias,
    getMateria,
    createMateria,
    updateMateria,
    deleteMateria
};
