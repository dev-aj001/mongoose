const Tecnologico = require("../models/tecnologicoModelo");
const Validator = require("../validation/validator");

const getTecnologicos = async (req, res) => {
    try {
        const tecnologicos = await Tecnologico.find();

        res.data = tecnologicos;
        res.status(200).json(tecnologicos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTecnologico = async (req, res) => {
    try {
        const tecnologicos = await Tecnologico.findById(req.params.id);

        res.data = tecnologicos;
        res.status(200).json(tecnologicos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const createTecnologico = async (req, res) => {
    try {
        const { error, value } = Validator.tecnologico.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const tecnologico = await Tecnologico.create(value);

        res.data = tecnologico;
        res.status(201).json(tecnologico);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { 
    getTecnologicos,
    getTecnologico,
    createTecnologico
};