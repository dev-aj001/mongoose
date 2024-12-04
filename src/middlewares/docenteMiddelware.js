const Materia = require("../models/materiaModelo");

const docenteMiddelware = async (req, res, next) => {
    console.log("Se ejecuto el middleware de docente");
    if(req.body.materiasImpartidas){
    // Validar cada materia
        if(!Array.isArray(req.body.materiasImpartidas)){
            return res.status(400).json({error: "Las materias impartidas debe ser un array"});
        }
        for (const idMateria of req.body.materiasImpartidas) {
            try {
                const materiaExiste = await Materia.findById(idMateria);
                if (!materiaExiste) {
                return res.status(400).json( {message: `La materia con ID ${idMateria} no existe.`});
                }
            } catch (error) {
                if (error.name === "CastError") {
                    return res.status(400).json({ error: `La materia con ID ${idMateria} no existe.`});
                }
                return res.status(500).json({ error: error.message });
            }
        }
  }
  next();
};

module.exports = docenteMiddelware