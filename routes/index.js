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

/**
 * Apply routes for specified routers.
 * @param {Express} app - Express response object.
 */

function routes(app) {
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
    app.use("/api", route);
  });
}

module.exports = routes;
