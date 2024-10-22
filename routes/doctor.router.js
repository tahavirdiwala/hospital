const doctorController = require("../controllers/doctor.controller");
const router = require("express").Router();

const uploadProfilePic = require("../middlewares/profilepic-upload.middleware");

router
  .route("/doctor")
  .post(uploadProfilePic.single("profilePicture"), doctorController.add)
  .get(doctorController.getAll);

router
  .route("/doctor/:id")
  .get(doctorController.get)
  .put(doctorController.edit)
  .delete(doctorController.delete);

module.exports = router;
