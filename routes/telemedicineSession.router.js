const router = require("express").Router();
const telemedicineSessionController = require("../controllers/telemedicineSession.controller");

router
  .route("/telemedicine-session")
  .post(telemedicineSessionController.add)
  .get(telemedicineSessionController.getAll);

router
  .route("/telemedicine-session/:id")
  .get(telemedicineSessionController.get)
  .put(telemedicineSessionController.edit)
  .delete(telemedicineSessionController.delete);

module.exports = router;
