const userController = require("../controllers/user.controller");
const router = require("express").Router();

router.route("/user/register").post(userController.register);
router.route("/user").post(userController.login).get(userController.getAll);

router.route("/user/logout").get(userController.logout);

router
  .route("/user/:id")
  .get(userController.get)
  .put(userController.edit)
  .delete(userController.delete);

module.exports = router;
