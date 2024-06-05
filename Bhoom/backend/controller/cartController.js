const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const Cart = require("../models/cartModel");

//* Get cart by user ID
exports.getCart = catchAsyncError(async (req, res, next) => {
  const cart = await Cart.findOne({ userId: req.user.id }).populate({
    path: "items.productId",
    model: "Product",
    select: "name description price category images", // Select the fields you want to include
  });
  if (!cart) {
    return next(
      new ErrorHandler(`Cart does not exist with Id: ${req.user.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    cart,
  });
});

//* add item
exports.addItem = catchAsyncError(async (req, res, next) => {
  const { productId, quantity, price } = req.body;
  let cart = await Cart.findOne({ userId: req.user.id });

  if (cart) {
    // Check if item already exists in cart
    const itemIndex = cart.items.findIndex(
      (item) => item.productId === productId
    );
    if (itemIndex > -1) {
      // Update item quantity
      let item = cart.items[itemIndex];
      item.quantity += quantity;
      cart.items[itemIndex] = item;
    } else {
      // Add new item
      cart.items.push({ productId, quantity, price });
    }
    cart.total += price * quantity;
    cart = await cart.save();
    return res.json(cart);
  } else {
    // Create new cart
    const newCart = new Cart({
      userId: req.user.id,
      items: [{ productId, quantity, price }],
      total: price * quantity,
    });
    await newCart.save();

    res.status(200).json({
      success: true,
      newCart,
    });
  }
});

//* Update item quantity in cart
exports.UpdateItemQuantity = catchAsyncError(async (req, res, next) => {
  const { quantity } = req.body;
  let cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) {
    return next(
      new ErrorHandler(`Cart does not exist with Id: ${req.user.id}`, 404)
    );
  }

  const itemIndex = cart.items.findIndex(
    (item) => item.productId === req.params.productId
  );

  if (itemIndex > -1) {
    let item = cart.items[itemIndex];
    cart.total -= item.price * item.quantity;
    item.quantity = quantity;
    cart.total += item.price * quantity;
    cart.items[itemIndex] = item;

    cart = await cart.save();
    res.json(cart);
  } else {
    res.status(404).json({ msg: "Item not found in cart" });
  }
});

//* remove item
exports.removeItem = catchAsyncError(async (req, res, next) => {
  let cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) {
    return next(
      new ErrorHandler(`Cart does not exist with Id: ${req.user.id}`, 404)
    );
  }

  const itemIndex = cart.items.findIndex(
    (item) => item.productId === req.params.productId
  );

  if (itemIndex > -1) {
    let item = cart.items[itemIndex];
    cart.total -= item.price * item.quantity;
    cart.items.splice(itemIndex, 1);

    cart = await cart.save();
    res.status(200).json({
      success: true,
      cart,
    });
  } else {
    res.status(404).json({ msg: "Item not found in cart" });
  }
});
