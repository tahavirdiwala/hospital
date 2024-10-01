const telemedicineSessionController = require("../controllers/telemedicineSession.controller");

const router = require("express").Router();

router
  .route("/telemedicine-session")
  .post(telemedicineSessionController.add)
  .get(telemedicineSessionController.getAll);

router
  .route("/telemedicine-session/:id")
  .get(telemedicineSessionController.get)
  .put(telemedicineSessionController.edit);
//   .delete(telemedicineSessionController)

module.exports = router;
