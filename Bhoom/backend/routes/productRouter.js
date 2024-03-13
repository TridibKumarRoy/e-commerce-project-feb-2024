const express = require("express");
const { isAuthenticated, authorizedRole } = require("../middleware/auth");
const router = express.Router();
const {getAllProducts,createProduct,getProductDetails,updateProduct,deleteProduct} = require("../controller/productController")

router.route("/products").get(getAllProducts);

router
  .route("/products/new")
  .post(isAuthenticated, authorizedRole("admin","seller"), createProduct);


//todo: in {updateProduct} and {deleteProduct} we should add filters so that sellers can only update and delete their own products
router
  .route("/products/:id")
  .get(getProductDetails)
  .put(isAuthenticated, authorizedRole("admin", "seller"), updateProduct)
  .delete(isAuthenticated, authorizedRole("admin", "seller"), deleteProduct);

module.exports = router;