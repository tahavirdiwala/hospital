const appointmentController = require("../controllers/appointment.controller");

const router = require("express").Router();

router
  .route("/appointment")
  .post(appointmentController.add)
  .get(appointmentController.getAll);

router
  .route("/appointment/:id")
  .get(appointmentController.get)
  .put(appointmentController.edit)
  .delete(appointmentController.delete);

module.exports = router;
