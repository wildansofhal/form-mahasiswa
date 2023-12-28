const express = require("express");
const mhsController = require("./MhsController.js")
const router = express.Router();

router.get("/mahasiswas", mhsController.getMhs);
router.get("/mahasiswa/id/:id", mhsController.getMhsById);
router.post("/mahasiswa", mhsController.saveMhs);
router.patch("/mahasiswa/:id", mhsController.updateMhs);
router.delete("/mahasiswa/:id", mhsController.deleteMhs);

module.exports = router;