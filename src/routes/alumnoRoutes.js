const alumnoController = require("../controllers/alumnoController");
const express = require("express");
const router = express.Router();

router.get("/", alumnoController.getAlumnos);
router.get("/:id", alumnoController.getAlumno);
router.post("/", alumnoController.createAlumno);
router.put("/:id", alumnoController.updateAlumno);
// router.delete("/:id", AlumnoController.deleteAlumno); // No es ideal eliminar un alumno
router.put("/:id/calificar", alumnoController.calificarMateria);

module.exports = router;