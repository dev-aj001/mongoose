const aulaController = require("../controllers/aulaController");
const express = require("express");
const router = express.Router();

router.get("/", aulaController.getAulas);
router.get("/:id", aulaController.getAula);
router.post("/", aulaController.createAula);
router.put("/:id", aulaController.updateAula);
router.delete("/:id", aulaController.deleteAula);

module.exports = router;