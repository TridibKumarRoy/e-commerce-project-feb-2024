const express = require("express");
const { isAuthenticated, authorizedRole } = require("../middleware/auth");
const {
  createServiceReq,
  getServiceReq,
  getAllServiceReq,
  updateServiceReq,
  deleteServiceReq,
} = require("../controller/serviceRequestController");

const {
  newService,
  getService,
  getAllService,
  updateService,
  deleteService,
} = require("../controller/serviceController");

const router = express.Router();
//* service request
router.route("/servicerequest/new").post(isAuthenticated, createServiceReq);

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
//* service
  router
    .route("/admin/service/new")
    .post(isAuthenticated, authorizedRole("admin"), newService);

router
  .route("/admin/services")
  .get(getAllService);
  
router
  .route("/admin/service/:id")
  .get( getService)
  .put(isAuthenticated, authorizedRole("admin"), updateService)
  .delete(isAuthenticated, authorizedRole("admin"), deleteService);

module.exports = router;