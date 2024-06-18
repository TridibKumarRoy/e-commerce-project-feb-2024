const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const Service = require("../models/serviceModel");

exports.newService = catchAsyncError(async(req,res,next) => {
    const service = req.body;

    await Service.create(service);

    res.status(201).json({
        success: true,
        service,
    });
})

//* get service details--admin
exports.getService = catchAsyncError(async (req, res, next) => { 
    const service = await Service.findById(req.params.id);
    
    if (!service) {
        return next(
            new ErrorHandler(`Service does not exist with Id: ${req.params.id}`, 404)
        );
    }
    
    res.status(200).json({
        success: true,
        service,
    });
})

//* get all service details--admin
exports.getAllService = catchAsyncError(async (req, res, next) => {
    const services = await Service.find();

    if (!services) {
        return next(
            new ErrorHandler("No services found", 404)
        );
    }
    
    res.status(200).json({
        success: true,
        services,
    });
})

//* update service details--admin

exports.updateService = catchAsyncError(async (req, res, next) => {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    if (!service) {
        return next(
            new ErrorHandler(`Service does not exist with Id: ${req.params.id}`, 404)
        );
    }

    res.status(200).json({
        success: true,
        service,
    });
})

//* delete service details--admin
exports.deleteService = catchAsyncError(async (req, res, next) => {
    const service = await Service.findById(req.params.id);

    if (!service) {
        return next(
            new ErrorHandler(`Service does not exist with Id: ${req.params.id}`, 404)
        );
    }

    await Service.deleteOne({ _id: req.params.id });

    res.status(200).json({
      success: true,
      message: "Service Deleted Successfully",
    });
})