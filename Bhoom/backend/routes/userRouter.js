const express = require("express");
const { isAuthenticated, authorizedRole } = require("../middleware/auth");
const {
  registerUser,
  loginUser,
  logOutUser,
  forgotPassword,
  resetPassword,
  getUserInfo,
  updateUserPassword,
  updateUserProfile,
  getAllUsers,
  getSingleUser,
  updateUserRole,
  deleteUser,
} = require("../controller/userController");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logOutUser);
router.route("/password/forgot/").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/me").get(isAuthenticated,getUserInfo);
router.route("/password/update").put(isAuthenticated, updateUserPassword);
router.route("/me/update").put(isAuthenticated, updateUserProfile);
router.route("/admin/users").get(isAuthenticated,authorizedRole("admin"), getAllUsers);
router
  .route("/admin/user/:id")
  .get(isAuthenticated, authorizedRole("admin"), getSingleUser)
  .put(isAuthenticated, authorizedRole("admin"), updateUserRole)
  .delete(isAuthenticated, authorizedRole("admin"), deleteUser);

module.exports = router;