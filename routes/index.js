const { Express } = require("express");
const authRouter = require("./auth.router");
const routers = require("./main.router");
const { verifyAuthToken } = require("../middlewares/auth.middleware");

/**
 * Apply routes for specified routers.
 * @param {Express} app - Express response object.
 */

function routes(app) {
  const defaultRoute = "/api";
  app.use(defaultRoute, authRouter);

  routers.forEach((route) => {
    app.use(defaultRoute, verifyAuthToken, route);
  });
}

module.exports = routes;
