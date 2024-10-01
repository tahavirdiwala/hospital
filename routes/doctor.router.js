const doctorController = require("../controllers/doctor.controller");

const router = require("express").Router();

router.route("/doctor").post(doctorController.add).get(doctorController.getAll);

router
  .route("/doctor/:id")
  .get(doctorController.get)
  .put(doctorController.edit)
  .delete(doctorController.delete);

module.exports = router;
