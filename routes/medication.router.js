const medicationController = require("../controllers/medication.controller");

const router = require("express").Router();

router
  .route("/medication")
  .post(medicationController.add)
  .get(medicationController.getAll);

router
  .route("/medication/:id")
  .get(medicationController.get)
  .put(medicationController.edit);

module.exports = router;
