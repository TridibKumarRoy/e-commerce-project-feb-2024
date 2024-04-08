const express = require("express");
const { isAuthenticated, authorizedRole } = require("../middleware/auth");
const {
  createServiceReq,
  getServiceReq,
  getAllServiceReq,
  updateServiceReq,
  deleteServiceReq,
} = require("../controller/serviceController");


router.route("/service/new").post(isAuthenticated, createServiceReq);

router
  .route("/admin/servicerequests")
    .get(isAuthenticated, authorizedRole("admin"), getAllServiceReq);
  
router
  .route("/admin/servicerequest/:id")
  .get(isAuthenticated, authorizedRole("admin"), getServiceReq)
  .put(isAuthenticated, authorizedRole("admin"), updateServiceReq)
  .delete(
    isAuthenticated,
    authorizedRole("admin"),
    deleteServiceReq
  );

const router = express.Router();