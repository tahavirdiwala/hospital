const { Express } = require("express");
const userRouter = require("./user.router");
const symptomRouter = require("./symptom.router");

/**
 * Apply routes for specified routers.
 * @param {Express} app - Express response object.
 */

function routes(app) {
  [userRouter, symptomRouter].forEach((route) => {
    app.use("/api", route);
  });
}

module.exports = routes;
