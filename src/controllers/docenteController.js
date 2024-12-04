const Docente = require("../models/docenteModelo");
const Validator = require("../validation/validator");

const getDocentes = async (req, res) => {
    try {
        const docentes = await Docente.find()
        .populate("tecnologico")
        .populate("materiasImpartidas");

        res.data = docentes;
        res.status(200).json(docentes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getDocente = async (req, res) => {
    try {
        const docente = await Docente.findById(req.params.id)
        .populate("tecnologico")
        .populate("materiasImpartidas");

        if (!docente) {
            return res.status(404).json({ message: "Docente no encontrado" });
        }

        res.data = docente;
        res.status(200).json(docente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createDocente = async (req, res) => {
    try {
        const { error, value } = Validator.docente.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const docente = await Docente.create(value);

        res.data = docente;
        res.status(201).json(docente);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: "RFC de docente ya registrado" });
        }
        res.status(500).json({ error: error.message });
    }
};

const updateDocente = async (req, res) => {
    try {
        const { error, value } = Validator.docenteUpdate.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const docente = await Docente.findByIdAndUpdate(req.params.id, value, 
            { new: true }
        );

        if (!docente) {
            return res.status(404).json({ message: "Docente no encontrado" });
        }

        res.data = docente;
        res.status(200).json(docente);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: "RFC de docente ya registrado" });
        }
        res.status(500).json({ error: error.message });
    }
};

const deleteDocente = async (req, res) => {
    try {
        const docente = await Docente.findByIdAndDelete(req.params.id);
        if (!docente) {
            return res.status(404).json({ message: "Docente no encontrado" });
        }

        res.data = docente;
        res.status(200).json(docente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getDocentes,
    getDocente,
    createDocente,
    updateDocente,
    deleteDocente,
};