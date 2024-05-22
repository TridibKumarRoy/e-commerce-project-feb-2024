const express = require("express");
const { isAuthenticated, authorizedRole } = require("../middleware/auth");
const router = express.Router();

const {
  
} = require("../controller/communityController");





module.exports = router;
