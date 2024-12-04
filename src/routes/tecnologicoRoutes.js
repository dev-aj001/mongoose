const tecnologicoController = require("../controllers/tecnologicoController");
const express = require("express");
const router = express.Router();

router.get("/", tecnologicoController.getTecnologicos);
router.get("/:id", tecnologicoController.getTecnologico);
router.post("/", tecnologicoController.createTecnologico);

module.exports = router;