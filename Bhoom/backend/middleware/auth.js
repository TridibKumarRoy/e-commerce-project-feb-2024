const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require('jsonwebtoken');
const User = require("../models/userModel");

exports.isAuthenticated = catchAsyncError(
    async (req, res, next) => {
        // const {token} = req.cookies;
        const token = req.header('Authorization');

        // console.log(token);

        if (!token) {
            return next(new ErrorHandler("Please Login to access this resource",401));
        }

        const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        req.user = await User.findById(decodedData.id);
        req.token = token;
        req.userID = decodedData.id;

        next();

    }
)


exports.authorizedRole = (...roles) => {
    return (req, res, next) => { 
        
        if (!roles.includes(req.user.role)) {
            return next(
              new ErrorHandler(`Role ${req.user.role} is not authorized`, 403)
            );
        }
        next();
    }

}