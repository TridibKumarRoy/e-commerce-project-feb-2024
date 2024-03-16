const express = require("express");
const {
  registerUser,
  loginUser,
  logOutUser,
  forgotPassword
} = require("../controller/userController");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logOutUser);
router.route("/password/forgot/").post(forgotPassword);

module.exports = router;