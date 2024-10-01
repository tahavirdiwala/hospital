const symptomController = require("../controllers/symptom.controller");

const router = require("express").Router();

router
  .route("/symptom")
  .post(symptomController.add)
  .get(symptomController.getAll);

module.exports = router;
