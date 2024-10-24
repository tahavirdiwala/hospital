const router = require("express").Router();
const appointmentController = require("../controllers/appointment.controller");

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
