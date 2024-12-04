const Grupo = require("../models/grupoModelo");
const Aula = require("../models/aulaModelo");

const Validator = require("../validation/validator");
const Docente = require("../models/docenteModelo");

const getGrupos = async (req, res) => {
    try {
        const grupos = await Grupo.find();

        res.data = grupos;
        res.status(200).json(grupos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getGrupo = async (req, res) => {
    try {
        const grupo = await Grupo.findById(req.params.id);

        res.data = grupo;
        res.status(200).json(grupo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createGrupo = async (req, res) => {
    try {
        const { error, value } = Validator.grupo.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        
        const aula = await Aula.findById(value.aula);
        if (!aula) {
            return res.status(404).json({ message: "Aula no encontrada" });
        }

        const docente = await Docente.findById(value.docente);
        if (!docente) {
            return res.status(404).json({ message: "Docente no encontrado" });
        }

        const grupo = new Grupo(value);
        
        // Agregar el grupo al arreglo `gruposAtendidos` del aula
        aula.gruposAtendidos.push(grupo._id);
        
        // Guardar ambos objetos en paralelo
        await Promise.all([grupo.save(), aula.save()]);

        res.data = grupo;
        res.status(201).json(grupo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteGrupo = async (req, res) => {
    try {
        // Buscar el grupo por ID
        const grupo = await Grupo.findById(req.params.id);
        if (!grupo) {
            return res.status(404).json({ message: "Grupo no encontrado" });
        }

        // Eliminar la referencia del grupo en el aula
        const aula = await Aula.findById(grupo.aula);
        if (aula) {
            aula.gruposAtendidos = aula.gruposAtendidos.filter(
                (grupoId) => !grupoId.equals(grupo._id)
            );
            await aula.save(); // Guardar los cambios en el aula
        }

        // Eliminar el grupo de la base de datos
        await Grupo.findByIdAndDelete(req.params.id);

        // Responder con éxito
        res.data = { message: "Grupo eliminado correctamente" };
        return res.status(200).json({ message: "Grupo eliminado correctamente" });
    } catch (error) {
        // Capturar y manejar errores
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { 
    getGrupos,
    getGrupo,
    createGrupo,
    deleteGrupo
};