const router = require("express").Router();
const doctorController = require("../controllers/doctor.controller");
const uploadDecorator = require("../middlewares/profilepic-upload.middleware");

router
  .route("/doctor")
  .post(uploadDecorator, doctorController.add)
  .get(doctorController.getAll);

router.route("/doctor/profile-pic").get(doctorController.getAllProfile);

router
  .route("/doctor/:id")
  .get(doctorController.get)
  .put(uploadDecorator, doctorController.edit)
  .delete(doctorController.delete);

module.exports = router;
