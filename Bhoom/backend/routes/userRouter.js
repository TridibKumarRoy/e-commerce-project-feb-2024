const express = require("express");
const {
  registerUser,
  loginUser,
  logOutUser,
} = require("../controller/userController");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logOutUser);

module.exports = router;