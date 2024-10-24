const router = require("express").Router();
const doctorController = require("../controllers/doctor.controller");

const uploadProfilePic = require("../middlewares/profilepic-upload.middleware");

router
  .route("/doctor")
  .post(uploadProfilePic.array("profilePicture[]"), doctorController.add)
  .get(doctorController.getAll);

router.route("/doctor/profile-pic").get(doctorController.getAllProfile);

router
  .route("/doctor/:id")
  .get(doctorController.get)
  .put(uploadProfilePic.array("profilePicture[]"), doctorController.edit)
  .delete(doctorController.delete);

module.exports = router;
