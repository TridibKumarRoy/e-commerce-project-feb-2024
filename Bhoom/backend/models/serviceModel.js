const mongoose = require("mongoose");

const serviceRequestSchema = new mongoose.Schema({});

module.exports = mongoose.model("serviceRequest",serviceRequestSchema);