const materiaController = require("../controllers/materiaController");
const express = require("express");
const router = express.Router();

router.get("/", materiaController.getMaterias);
router.get("/:id", materiaController.getMateria);
router.post("/", materiaController.createMateria);
router.put("/:id", materiaController.updateMateria);
router.delete("/:id", materiaController.deleteMateria);

module.exports = router;