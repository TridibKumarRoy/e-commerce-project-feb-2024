const express = require("express");
const { isAuthenticated, authorizedRole } = require("../middleware/auth");
const router = express.Router();
const {getAllProducts,createProduct,getProductDetails,updateProduct,deleteProduct} = require("../controller/productController")

router.route("/products").get(getAllProducts);
router
  .route("/products/new")
  .post(isAuthenticated, authorizedRole("admin"), createProduct);
router
  .route("/products/:id")
  .get(getProductDetails)
  .put(isAuthenticated, authorizedRole("admin"), updateProduct)
  .delete(isAuthenticated, authorizedRole("admin"), deleteProduct);

module.exports = router;