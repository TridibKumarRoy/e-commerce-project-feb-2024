const Order = require('../models/orderModel');
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const Product = require("../models/productModel");

//* create new order
exports.newOrder = catchAsyncError(async (req, res, next) => {

     const {
       shippingInfo,
       orderItems,
       paymentInfo,
       itemsPrice,
       taxPrice,
       shippingPrice,
       totalPrice,
     } = req.body;

     const order = await Order.create({
       shippingInfo,
       orderItems,
       paymentInfo,
       itemsPrice,
       taxPrice,
       shippingPrice,
       totalPrice,
       paidAt: Date.now(),
       user: req.user._id,
     });

     res.status(201).json({
       success: true,
       order,
     });
});

//* get order details
exports.getSingleOrder = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate("user","name email")

  if (!order) {
    return next(
      new ErrorHandler(`Order does not exist with Id: ${req.params.id}`,404)
    );
  }

  res.status(200).json({
    success: true,
    order,
  });
});


//* get logged in user  Orders
exports.myOrders = catchAsyncError(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    orders,
  });
});


//* get all Orders -- Admin
exports.getAllOrders = catchAsyncError(async (req, res, next) => {
  const orders = await Order.find();

  let totalAmount = 0;

  orders.forEach((order) => {
    totalAmount +=  (order.totalPrice * Number(order.orderItems[0].quantity));
  });

  res.status(200).json({
    success: true,
    totalAmount,
    orders,
  });
});

//todo: get all Orders -- seller
exports.getAllOrdersSeller = catchAsyncError(async (req, res, next) => {
  const orders = await Order.find();

  let totalAmount = 0;

  orders.forEach((order) => {
    totalAmount += order.totalPrice * Number(order.orderItems[0].quantity);
  });

  res.status(200).json({
    success: true,
    totalAmount,
    orders,
  });
});

//* update Order Status -- Admin
exports.updateOrder = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }

  if (order.orderStatus === "Delivered") {
    return next(new ErrorHandler("You have already delivered this order", 400));
  }

  if (req.body.status === "Shipped") {
    order.orderItems.forEach(async (o) => {
      await updateStock(o.product, o.quantity);
    });
  }
  order.orderStatus = req.body.status;

  if (req.body.status === "Delivered") {
    order.deliveredAt = Date.now();
  }

  await order.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
  });
});

//todo: update Order Status -- Seller
exports.updateOrderSeller = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }

  if (order.orderStatus === "Delivered") {
    return next(new ErrorHandler("You have already delivered this order", 400));
  }

  if (req.body.status === "Shipped") {
    order.orderItems.forEach(async (o) => {
      await updateStock(o.product, o.quantity);
    });
  }
  order.orderStatus = req.body.status;

  if (req.body.status === "Delivered") {
    order.deliveredAt = Date.now();
  }

  await order.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
  });
});

async function updateStock(id, quantity) {
  const product = await Product.findById(id);

  product.Stock -= quantity;

  await product.save({ validateBeforeSave: false });
}

//* delete Order -- Admin
exports.deleteOrder = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }

    // await order.remove();
    await Order.deleteOne({ _id: req.params.id });

  res.status(200).json({
    success: true,
  });
});


  //todo: delete Order -- Seller
  (exports.deleteOrderSeller = catchAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id);
    const seller = req.user._id;

    const productCreatorOfOrder = order.orderItems;

    // const orderItems = forEach((item) => {
      // const productId = item.product;
      const productId = productCreatorOfOrder[0].product;
      const product = Product.findById(productId);
      // const productCreator = product.user.toString();

    //   if (product.user.toString() != seller.toString()) {
    //     return item;
    //   }
    // })
    


    if (!order) {
      return next(new ErrorHandler("Order not found with this Id", 404));
    }

    // await Order.deleteOne({ _id: req.params.id });

    res.status(200).json({
      success: true,
      productCreatorOfOrder,
      // productCreator,
      seller,
      productId,
      product,
    });
  }));
