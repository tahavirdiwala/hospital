const paymentController = require("../controllers/payment.controller");

const router = require("express").Router();

router
  .route("/payment")
  .post(paymentController.add)
  .get(paymentController.getAll);

router.route("/payment/:id");

module.exports = router;
