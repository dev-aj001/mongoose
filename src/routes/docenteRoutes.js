const docenteController = require("../controllers/docenteController");
const docenteMiddelware = require("../middlewares/docenteMiddelware");
const express = require("express");
const router = express.Router();

router.get("/", docenteController.getDocentes);
router.get("/:id", docenteController.getDocente);
router.post("/", docenteMiddelware, docenteController.createDocente);
router.put("/:id", docenteMiddelware, docenteController.updateDocente);
router.delete("/:id", docenteController.deleteDocente);

module.exports = router;