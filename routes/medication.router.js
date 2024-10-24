const router = require("express").Router();
const medicationController = require("../controllers/medication.controller");

router
  .route("/medication")
  .post(medicationController.add)
  .get(medicationController.getAll);

router
  .route("/medication/:id")
  .get(medicationController.get)
  .put(medicationController.edit)
  .delete(medicationController.delete);

module.exports = router;
