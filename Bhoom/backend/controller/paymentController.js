const { instance } = require("../config/razorpay");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");


exports.checkout = catchAsyncError(async (req, res, next) => {


    const options = {
      amount: 50000, // amount in the smallest currency unit
      currency: "INR",
    //   receipt: "order_rcptid_11",
    };
    const order = await instance.orders.create(options);

    console.log(order);
    res.status(200).json({
      success: true,
      order,
    });

})