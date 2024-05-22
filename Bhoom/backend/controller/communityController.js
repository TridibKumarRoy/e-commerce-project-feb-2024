const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const Community = require("../models/communityModel");


exports.newPost = catchAsyncError(
    async (req, res, next) => {
        const {
            
        } = req.body;
        const post = await Community.create({
            
        })
            
        res.status(201).json({
            success: true,
            post,
        });
            
    }
            
);

exports.getPost = catchAsyncError(
    async (req, res, next) => {
        const post = await Community.findById(req.params.id);
        if (!post) {
            return next(
                new ErrorHandler(`Post does not exist with Id: ${req.params.id}`, 404)
            );
        }
        res.status(200).json({
            success: true,
            post,
        });
    }
);

exports.updatePost = catchAsyncError(
    async (req, res, next) => {
        const post = await Community.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!post) {
            return next(
                new ErrorHandler(`Post does not exist with Id: ${req.params.id}`, 404)
            );
        }
        res.status(200).json({
            success: true,
            post,
        });
    }
)

exports.deletePost = catchAsyncError(
    async (req, res, next) => {
        const post = await Community.findByIdAndDelete(req.params.id);
        if (!post) {
            return next(
                new ErrorHandler(`Post does not exist with Id: ${req.params.id}`, 404)
            );
        }
        res.status(200).json({
            success: true,
            post,
        });
    }
)

