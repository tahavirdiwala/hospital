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
  app.use(defaultRoute, authRouter); // without auth routes
  app.use(defaultRoute, verifyAuthToken, routers); // auth routes
}

module.exports = routes;
