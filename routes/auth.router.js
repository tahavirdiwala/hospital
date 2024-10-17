const authRouter = require("express").Router();
const authController = require("../controllers/auth.controller");

authRouter.route("/auth/register").post(authController.register);

authRouter.route("/auth/login").post(authController.login);

authRouter.route("/auth/change-password").post(authController.changePassword);

authRouter.route("/auth/forgot-password").post(authController.forgotPassword);

authRouter
  .route("/auth/reset-password/:token")
  .post(authController.resetPassword);

authRouter.route("/auth/logout").get(authController.logout);

module.exports = authRouter;
