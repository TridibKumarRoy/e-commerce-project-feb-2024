const express = require("express");
const { isAuthenticated, authorizedRole } = require("../middleware/auth");
const { checkout } = require("../controller/paymentController");
const router = express.Router();


router.route("/checkout").post(checkout);

module.exports = router;