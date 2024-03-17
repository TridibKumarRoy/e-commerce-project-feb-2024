const express = require("express");
const { isAuthenticated, authorizedRole } = require("../middleware/auth");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  getProductDetails,
  updateProduct,
  deleteProduct,
  createReview,
  getAllReviews,
  deleteReview,
  updateProductSeller,
  deleteProductSeller,
} = require("../controller/productController");

router.route("/products").get(getAllProducts);

router
  .route("/admin/products/new")
  .post(isAuthenticated, authorizedRole("admin", "seller"), createProduct);

router
  .route("/admin/products/:id")
  .get(getProductDetails)
  .put(isAuthenticated, authorizedRole("admin"), updateProduct)
  .delete(isAuthenticated, authorizedRole("admin"), deleteProduct);

router
  .route("/seller/products/:id")
  .put(isAuthenticated, authorizedRole("seller"), updateProductSeller)
  .delete(isAuthenticated, authorizedRole("seller"), deleteProductSeller);

router.route("/products/:id").get(getProductDetails);

router.route("/review").put(isAuthenticated, createReview);
router
  .route("/reviews")
  .get(getAllReviews)
  .delete(isAuthenticated, deleteReview);
module.exports = router;
