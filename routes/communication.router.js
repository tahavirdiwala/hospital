const communicationController = require("../controllers/communication.controller");

const router = require("express").Router();

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
