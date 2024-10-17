const router = require("express").Router();
const userController = require("../controllers/user.controller");

router.route("/users").get(userController.getAll);

router
  .route("/user/:id")
  .get(userController.get)
  .put(userController.edit)
  .delete(userController.delete);

module.exports = router;
