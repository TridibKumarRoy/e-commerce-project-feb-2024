const Product = require("../models/productModel");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const ApiFeatures = require("../utils/apiFeatures");

//* create product
exports.createProduct = catchAsyncError(async (req, res, next) => {

  req.body.user = req.user.id; //* got id when from getJWTtoken function

  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
  
});

//* get all product
exports.getAllProducts = catchAsyncError(async (req, res, next) => {
  const resultPerPage = 6;
  const productCount = await Product.countDocuments();

  const apiFeatures = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

  // const product = await Product.find()
  let product = await apiFeatures.query;

  // console.log(product);

  res.status(200).json({
    success: true,
    product,
    productCount,
  });
});

//* get product Details
exports.getProductDetails = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
    // productCount
  });
});

//*update product -- admin
exports.updateProduct = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

//* update product -- seller
exports.updateProductSeller = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  const productCreator = product.user;
  const seller = req.user._id;
  const same = productCreator.toString() == seller.toString();

  if (!product) {
    return next(new ErrorHandler("Product Not found", 404));
  }

  if (!same) {
    return next(new ErrorHandler("Not authorized", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

//* delete product
exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not found", 404));
  }

  await Product.deleteOne({ _id: req.params.id });

  res.status(200).json({
    success: true,
    product,
  });
});

//* delete product --seller
exports.deleteProductSeller = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  const productCreator = product.user;
  const seller = req.user._id;
  const same = productCreator.toString() == seller.toString();

  if (!product) {
    return next(new ErrorHandler("Product Not found", 404));
  }

  if (!same) {
    return next(new ErrorHandler("Not authorized", 404));
  }

  await Product.deleteOne({ _id: req.params.id });

  res.status(200).json({
    success: true,
    product,
  });
});


//* create new review
exports.createReview = catchAsyncError(async (req, res, next) => {
  const { rating, comment, productId } = req.body;
  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);

  const isReviewed = await product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString()) {
        rev.rating = review.rating;
        rev.comment = review.comment;
      }
    });
  } else {
    product.reviews.push(review);
    product.numberOfReviewes = product.reviews.length;
  }
  let avg = 0;
  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  product.ratings = avg / product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

//* get all review of a product
exports.getAllReviews = catchAsyncError(async (req, res, next) => {
  const productId = req.query.id;

  const product = await Product.findById(productId);

  if (!product) {
    return next(new ErrorHandler("Product Not found", 404));
  }

  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});

//* delete review
exports.deleteReview = catchAsyncError(async (req, res, next) => {

  const product = await Product.findById(req.query.productId);

  if (!product) {
    return next(new ErrorHandler("Review Not found", 404));
  }

  const reviews = product.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let avg = 0;
  reviews.forEach((rev) => {
    avg += rev.rating;
  });

  let ratings = 0;

  if (reviews.length === 0) {
    ratings = 0;
  } else {
    ratings = avg / reviews.length;
  }


  const numberOfReviewes = reviews.length

  await Product.findByIdAndUpdate(req.query.productId, {
    reviews,
    ratings,
    numberOfReviewes,
  }, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true
  });
});
