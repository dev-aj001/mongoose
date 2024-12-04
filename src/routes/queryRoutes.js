const queryController = require("../controllers/queryController");

const express = require("express");
const router = express.Router();

router.get("/query1/:id", queryController.query1);
router.get("/query2/:grupoId", queryController.query2);
router.get("/query3/:id", queryController.query3);
router.get("/query4/:materiaId", queryController.query4);
router.get("/query5/:materiaId", queryController.query5);
router.get("/query6/:materiaId", queryController.query6);
router.get("/query7/:alumnoId/:horario", queryController.query7);
router.get("/query8/:alumnoId", queryController.query8);
router.get("/query9/:docenteId", queryController.query9);

module.exports = router;