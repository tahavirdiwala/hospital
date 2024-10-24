const router = require("express").Router();
const symptomController = require("../controllers/symptom.controller");

router
  .route("/symptom")
  .post(symptomController.add)
  .get(symptomController.getAll);

router
  .route("/symptom/:id")
  .get(symptomController.get)
  .put(symptomController.edit)
  .delete(symptomController.delete);

module.exports = router;
