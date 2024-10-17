const { Express } = require("express");
const authRouter = require("./auth.router");
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
/**
 * Apply routes for specified routers.
 * @param {Express} app - Express response object.
 */

function routes(app) {
  const defaultRoute = "/api";
  app.use(defaultRoute, authRouter);

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
  ].forEach((route) => {
    app.use(defaultRoute, applyAuthentication, route);
  });
}

module.exports = routes;
