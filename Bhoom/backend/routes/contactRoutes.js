const express = require("express");
const { isAuthenticated, authorizedRole } = require("../middleware/auth");
const router = express.Router();

const {
  newContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact,
} = require("../controller/contactController");

router.route("/contact").post(isAuthenticated, newContact);

router.route("/getcontacts").get(isAuthenticated,authorizedRole("admin"), getContacts);

router
  .route("/contact/:id")
  .get(isAuthenticated,authorizedRole("admin"), getContact)
  .put(isAuthenticated,authorizedRole("admin"), updateContact)
  .delete(isAuthenticated,authorizedRole("admin"), deleteContact);


module.exports = router;