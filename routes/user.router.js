const userController = require("../controllers/user.controller");
const loginRouter = require("express").Router();
const router = require("express").Router();

router.route("/user/register").post(userController.register);

loginRouter.route("/user/login").post(userController.login);

router.route("/user").get(userController.getAll);

router.route("/user/logout").get(userController.logout);

router
  .route("/user/:id")
  .get(userController.get)
  .put(userController.edit)
  .delete(userController.delete);

module.exports = {
  userRouter: router,
  loginRouter,
};
