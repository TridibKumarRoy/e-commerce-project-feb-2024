const User = require("../models/userModel");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

//*registration
exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is a sample is",
      url: "profilepictureurl",
    },
  });

  // const token = user.getJWTtoken();

  // res.status(201).json({
  //     success: true,
  //     // user,
  //     token
  // });

  sendToken(user, 201, res);
});

//* login
exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("please Enter Email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("invalid Email or password", 401));
  }

  const isValidPassword = await user.comparePassword(password);

  if (!isValidPassword) {
    return next(new ErrorHandler("invalid Email or password", 401));
  }

  sendToken(user, 200, res);
});

//* Logout
exports.logOutUser = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

//* forgotPassword
exports.forgotPassword = catchAsyncError(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  const resetPassToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetPassToken}`;

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
      message: `Email sent ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });

    return next(new ErrorHandler(error.message, 500));
  }
});

//* reset password
exports.resetPassword = catchAsyncError(async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHandler(
        "Reset Password token is invalid or has been expired",
        404
      )
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("Passwords do not match", 400));
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();
  sendToken(user, 200, res);
});

//* get user information
exports.getUserInfo = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("-password");
  res.status(200).json({
    success: true,
    user,
  });
});

//* update User Password
exports.updateUserPassword = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Old password is incorrect", 400));
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHandler("password does not match", 400));
  }

  user.password = req.body.newPassword;

  await user.save();

  sendToken(user, 200, res);
});

//* update User Profile
exports.updateUserProfile = catchAsyncError(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
  };

  // todo: avatar update

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    user,
  });
});

//* get all User - admin only
exports.getAllUsers = catchAsyncError(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
});

//* get user details - admin only
exports.getSingleUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHandler(`User does not exist with Id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
    user,
  });
});

//* update User Role - admin only
exports.updateUserRole = catchAsyncError(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    user,
  });
});

//* delete User - admin only
exports.deleteUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHandler(`User does not exist with Id: ${req.params.id}`, 400)
    );
  }

  //todo: delete pictures

    // await user.remove();
    await User.deleteOne({ _id: req.params.id });

  res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
  });
});
