const communicationController = require("../controllers/communication.controller");

const router = require("express").Router();

router
  .route("/communication")
  .post(communicationController.add)
  .get(communicationController.getAll);

router.route("/communication/:id").get(communicationController.get);
module.exports = router;
