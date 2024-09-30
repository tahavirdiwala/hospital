const UserController = require("../controllers/user.controller");
const router = require("express").Router();

router.route("/user").post(UserController.add).get(UserController.getAll);

router.route("/user/:id").get(UserController.get);

module.exports = router;
