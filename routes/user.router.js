const userController = require("../controllers/user.controller");
const router = require("express").Router();

router.route("/user").post(userController.add).get(userController.getAll);

router
  .route("/user/:id")
  .get(userController.get)
  .put(userController.edit)
  .delete(userController.delete);

module.exports = router;
