const { instance } = require("../config/razorpay");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const crypto = require("crypto");
const Payment = require("../models/paymentModel");


exports.checkout = catchAsyncError(async (req, res, next) => {


    const options = {
      amount: Number(req.body.amount * 100), // amount in the smallest currency unit
      currency: "INR",
      //   receipt: "order_rcptid_11",
    };
    const order = await instance.orders.create(options);

    // console.log(order);
    res.status(200).json({
      success: true,
      order,
    });

})


exports.paymentVerification = catchAsyncError(async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
        .digest("hex");
    
    //!
    // console.log(expectedSignature);

  const isAuthentic = expectedSignature === razorpay_signature;
//   const isAuthentic = true;

  if (isAuthentic) {
    // Database comes here

    const paymentData = await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    // res.redirect(
    //   `http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`
    // );
    res.status(200).json({
      success: true,
      paymentData,
      redirectURL: `http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`,
    });
  } else {
    res.status(400).json({
      success: false,
    });
  }
});


exports.getKey = catchAsyncError(async (req, res, next) => {
  res.status(201).json({
    key: process.env.RAZORPAY_KEY_ID,
  });
});