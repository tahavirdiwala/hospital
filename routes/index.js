const { Express } = require("express");
const userRouter = require("./user.router");
const symptomRouter = require("./symptom.router");
const doctorRouter = require("./doctor.router");
const appointmentRouter = require("./appointment.router");
const medicationRouter = require("./medication.router");
const communicationRouter = require("./communication.router");

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
  ].forEach((route) => {
    app.use("/api", route);
  });
}

module.exports = routes;
