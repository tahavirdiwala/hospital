const { Express } = require("express");
const userRouter = require("./user.router");
const symptomRouter = require("./symptom.router");
const doctorRouter = require("./doctor.router");
const appointmentRouter = require("./appointment.router");
const medicationRouter = require("./medication.router");
const communicationRouter = require("./communication.router");
const paymentRouter = require("./payment.router");
const clinic = require("./clinic.router");
const telemedicineSession = require("./telemedicineSession.router");
const { applyAuthentication } = require("../middlewares/auth.middleware");
const userController = require("../controllers/user.controller");
const loginRouter = require("express").Router();
/**
 * Apply routes for specified routers.
 * @param {Express} app - Express response object.
 */

function routes(app) {
  loginRouter.route("/user/login").post(userController.login);
  app.use("/api", loginRouter);

  [
    userRouter,
    symptomRouter,
    doctorRouter,
    appointmentRouter,
    medicationRouter,
    communicationRouter,
    paymentRouter,
    clinic,
    telemedicineSession,
  ].forEach((item) => {
    app.use("/api", applyAuthentication, item);
  });
}

module.exports = routes;
