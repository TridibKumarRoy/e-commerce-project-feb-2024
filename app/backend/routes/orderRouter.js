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
  getAllOrdersSeller,
  updateOrderSeller,
  deleteOrderSeller,
} = require("../controller/orderController");


router.route("/order/new").post(isAuthenticated, newOrder);

router
  .route("/order/:id")
  .get(isAuthenticated, getSingleOrder);

router
  .route("/orders/me")
  .get(isAuthenticated, myOrders);

router.route("/admin/orders").get(isAuthenticated, authorizedRole("admin"), getAllOrders);

router.route("/seller/orders").get(isAuthenticated, authorizedRole("seller"), getAllOrdersSeller);

router
  .route("/admin/order/:id")
  .put(isAuthenticated, authorizedRole("admin"), updateOrder)
  .delete(isAuthenticated, authorizedRole("admin"), deleteOrder);

router
  .route("/seller/order/:id")
  .put(isAuthenticated, authorizedRole("seller"), updateOrderSeller)
  .delete(isAuthenticated, authorizedRole("seller"), deleteOrderSeller);

module.exports = router;