const ServiceRequest = require("../models/serviceModel");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");


//todo: request a service
exports.createServiceReq = catchAsyncError(async (req, res, next) => {
    const service = req.body;

    const serviceRequest = await serviceRequest.create(service);

    res.status(201).json({
      success: true,
      serviceRequest,
    });
    
})

//todo: get service request details--admin
exports.getServiceReq = catchAsyncError(async (req, res, next) => {
    const serviceRequest = await ServiceRequest.findById(req.params.id);

    if (!serviceRequest) {
      return next(
        new ErrorHandler(`Service Request does not exist with Id: ${req.params.id}`, 404)
      );
    }
    
    res.status(200).json({
      success: true,
      serviceRequest,
    });
})

//todo: get all service requests--admin
exports.getAllServiceReq = catchAsyncError(async (req, res, next) => {
    const serviceRequests = await ServiceRequest.find();

    if (!serviceRequests) {
        return next(
            new ErrorHandler("No service requests found", 404)
        );
    }

    res.status(200).json({
      success: true,
      serviceRequests,
    });
})

//todo: update a service request--admin
 exports.updateServiceReq = catchAsyncError(async (req, res, next) => {
    const serviceRequest = await ServiceRequest.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    if (!serviceRequest) {
      return next(
        new ErrorHandler(`Service Request does not exist with Id: ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      success: true,
      serviceRequest,
    });
})

//todo: delete a service request--admin
 exports.deleteServiceReq = catchAsyncError(async (req, res, next) => {
    const serviceRequest = await ServiceRequest.findById(req.params.id);

    if (!serviceRequest) {
      return next(
        new ErrorHandler(`Service Request does not exist with Id: ${req.params.id}`, 404)
      );
     }
     
     await serviceRequest.deleteOne({ _id: req.params.id });

    res.status(200).json({
      success: true,
      message: "Service Request Deleted Successfully",
    });
})
