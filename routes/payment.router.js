const router = require("express").Router();
const paymentController = require("../controllers/payment.controller");

router
  .route("/payment")
  .post(paymentController.add)
  .get(paymentController.getAll);

router.route("/payment/:id");

module.exports = router;
