const router = require("express").Router();
const communicationController = require("../controllers/communication.controller");

router
  .route("/communication")
  .post(communicationController.add)
  .get(communicationController.getAll);

router
  .route("/communication/:id")
  .get(communicationController.get)
  .put(communicationController.edit)
  .delete(communicationController.delete);

module.exports = router;
