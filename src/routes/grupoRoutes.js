const grupoController = require("../controllers/grupoController");
const express = require("express");
const router = express.Router();

router.get("/", grupoController.getGrupos);
router.get("/:id", grupoController.getGrupo);
router.post("/", grupoController.createGrupo);
// router.put("/:id", grupoController.updateGrupo);
router.delete("/:id", grupoController.deleteGrupo);

module.exports = router;