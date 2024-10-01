const clinicController = require("../controllers/clinic.controller");

const router = require("express").Router();

router.route("/clinic").post(clinicController.add).get(clinicController.getAll);

router.route("/clinic/:id").get(clinicController.get);

module.exports = router;
