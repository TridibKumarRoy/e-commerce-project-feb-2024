const express = require("express");
const { isAuthenticated, authorizedRole } = require("../middleware/auth");
const {
  checkout,
  paymentVerification,
  getKey,
} = require("../controller/paymentController");

const router = express.Router();

router.route("/checkout").post(isAuthenticated,checkout);

router.route("/paymentverification").post(isAuthenticated,paymentVerification);

router.route("/getkey").get(isAuthenticated,getKey);

module.exports = router;