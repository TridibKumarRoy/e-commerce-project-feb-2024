const Product = require("../models/productModel")
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const ApiFeatures = require("../utils/apiFeatures")

//* create product
exports.createProduct = catchAsyncError(async (req,res,next)=>{
    
    
    const product = await Product.create(req.body)
    
    res.status(201).json({
        success: true,
        product
    })

})

//* get all product
exports.getAllProducts = catchAsyncError(async(req,res,next)=>{

    const resultPerPage = 5;
    const productCount = await Product.countDocuments();

    const apiFeatures= new ApiFeatures(Product.find(),req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

    // const product = await Product.find()
    let product = await apiFeatures.query;

    res.status(200).json({
        success: true,
        product,
        productCount
    });
})

//* get product Details
exports.getProductDetails = catchAsyncError(async (req,res,next)=>{
    
        const product = await Product.findById(req.params.id);
    
        if (!product) {
            return next(new ErrorHandler("Product Not found", 404));
          }
    
        res.status(200).json({
            success: true,
            product,
            // productCount
        });
    
})

//*update product
exports.updateProduct = catchAsyncError(async (req,res,next)=>{
    
        let product = await Product.findById(req.params.id);
    
        if (!product) {
            return next(new ErrorHandler("Product Not found", 404));
          }
    
        product = await Product.findByIdAndUpdate(req.params.id, req.body,{
            new : true,
            runValidators: true,
            useFindAndModify: false
        })
    
        res.status(200).json({
            success: true,
            product
        });
        
   

})


exports.deleteProduct = catchAsyncError(async (req,res,next)=>{
   
        let product = await Product.findById(req.params.id);
    
        if (!product) {
            return next(new ErrorHandler("Product Not found", 404));
          }
    
    
        await Product.deleteOne({"_id":req.params.id})

    
        res.status(200).json({
            success: true,
            product
        });
        
    

})