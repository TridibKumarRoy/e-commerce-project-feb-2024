const User = require("../models/userModel")
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");

//*registration
exports.registerUser = catchAsyncError(
    async (req, res, next) => {
        const { name, email, password } = req.body;

        const user = await User.create({
            name, email, password, avatar: {
                public_id: "this is a sample is",
                url: "profilepictureurl"
            }
        })

        // const token = user.getJWTtoken();

        // res.status(201).json({
        //     success: true,
        //     // user,
        //     token
        // });

        sendToken(user, 201, res);
    }
)


//* login
exports.loginUser = catchAsyncError(
    async (req, res, next) => {

        const { email, password } = req.body;

        if(!email || !password){
            return next(new ErrorHandler("please Enter Email and password",400))
        }

        const user = await User.findOne({ email }).select("+password");
        
        if(!user){
            return next(new ErrorHandler("invalid Email or password",401))
        }

        const isValidPassword = await user.comparePassword(password);

        if(!isValidPassword){
            return next(new ErrorHandler("invalid Email or password",401))
        }

        sendToken(user, 200, res);

    }
)


//* Logout 
exports.logOutUser = catchAsyncError(
    async (req, res, next) => { 

        res.cookie("token", null, {
          expires: new Date(Date.now()),
          httpOnly: true,
        });

        res.status(200).json({
            success: true,
            message: "Logged Out"
        });
    }
)

//* forgotPassword
exports.forgotPassword = catchAsyncError(async (req, res, next) => { 
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }
    
    const resetPassToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    const resetUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetPassToken}`;

    const message = `Password reset token is : \n\n ${resetUrl} \n\nif you have not requested this email than please ignore it`;

    try {
        await sendEmail({
          to: user.email,
          subject: "Bhoom Password Reset",
          // text: message,
          message,
        });
        
        res.status(200).json({
            success: true,
            message: `Email sent ${user.email} successfully`
        });
        
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save({ validateBeforeSave: false });

        return next(new ErrorHandler(error.message, 500));
    }
})