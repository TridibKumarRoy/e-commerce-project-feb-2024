const express = require("express");
const { isAuthenticated, authorizedRole } = require("../middleware/auth");
const router = express.Router();
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controller/orderController");


router.route("/order/new").post(isAuthenticated, newOrder);
router
  .route("/order/:id")
  .get(isAuthenticated, getSingleOrder);
router
  .route("/orders/me")
  .get(isAuthenticated, myOrders);
router.route("/admin/orders").get(isAuthenticated,authorizedRole("admin"), getAllOrders);
router
  .route("/admin/order/:id")
  .put(isAuthenticated, authorizedRole("admin"), updateOrder)
  .delete(isAuthenticated, authorizedRole("admin"), deleteOrder);

module.exports = router;