const express = require("express");
const { isAuthenticated, authorizedRole } = require("../middleware/auth");
const router = express.Router();

const {
  getCart,
  addItem,
  UpdateItemQuantity,
  removeItem,
} = require("../controller/cartController");

router.route("/getcart").get(isAuthenticated, getCart);

router.route("/addtocart").post(isAuthenticated, addItem);

router.route("/updatecart/:productId").put(isAuthenticated, UpdateItemQuantity);

router.route("/removefromcart/:productId").delete(isAuthenticated, removeItem);


module.exports = router;
