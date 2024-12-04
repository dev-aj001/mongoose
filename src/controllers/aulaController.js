const Aula = require("../models/aulaModelo");

const Validator = require("../validation/validator");

const getAulas = async (req, res) => {
    try {
        const aulas = await Aula.find();

        res.data = aulas;
        res.status(200).json(aulas);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las aulas" });
    }
};

const getAula = async (req, res) => {
    try {
        const aula = await Aula.findById(req.params.id);
        if (!aula) {
            return res.status(404).json({ error: "Aula no encontrada" });
        }

        res.data = aula;
        res.status(200).json(aula);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener la aula" });
    }
};

const createAula = async (req, res) => {
    try {
        const { error, value } = Validator.aula.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const aula = await Aula.create(value);

        res.data = aula;
        res.status(201).json(aula);
    } catch (error) {
        if (error.code === 11000) { 
            return res.status(400).json({ error: "Código de aula ya registrado" });
        }
        res.status(500).json({ error: "Error al crear la aula" });
    }
};

const updateAula = async (req, res) => {
    try {
        const { error, value } = Validator.aulaUpdate.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const aula = await Aula.findByIdAndUpdate(req.params.id, { $set: value }, { new: true });
        if (!aula) {
            return res.status(404).json({ error: "Aula no encontrada" });
        }

        res.data = aula;
        res.status(200).json(aula);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al actualizar la aula" });
    }
};

const deleteAula = async (req, res) => {
    try {
        const aula = await Aula.findByIdAndDelete(req.params.id);
        if (!aula) {
            return res.status(404).json({ error: "Aula no encontrada" });
        }

        res.data = aula;
        res.status(200).json(aula);
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar la aula" });
    }
};

module.exports = { 
    getAulas,
    getAula,
    createAula,
    updateAula,
    deleteAula 
};