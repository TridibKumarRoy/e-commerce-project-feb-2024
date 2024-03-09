const Product = require("../models/productModel")

//* create product
exports.createProduct = async (req,res,next)=>{
    
    const product = await Product.create(req.body)
    
    res.status(201).json({
        success: true,
        product
    })

}

//* get all product
exports.getAllProducts = async(req,res,next)=>{
    const product = await Product.find()
    res.status(200).json({
        success: true,
        product
    });
}

//* get product Details
exports.getProductDetails = async (req,res,next)=>{
    try {
        const product = await Product.findById(req.params.id);
    
        if(!product){
            return res.status(500).json({
                success: false,
                message: "product not found"
            });
        }
    
        res.status(200).json({
            success: true,
            product
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "product not found"
        });
    }
}

//*update product
exports.updateProduct = async (req,res,next)=>{
    try {
        let product = await Product.findById(req.params.id);
    
        if(!product){
            return res.status(500).json({
                success: false,
                message: "product not found"
            });
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
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "product not found"
        });
    }

}


exports.deleteProduct = async (req,res,next)=>{
    try {
        let product = await Product.findById(req.params.id);
    
        if(!product){
            return res.status(500).json({
                success: false,
                message: "product not found"
            });
        }
    
        // await product.remove();
        await Product.deleteOne({"_id":req.params.id})

    
        res.status(200).json({
            success: true,
            product
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "product not found"
        });
    }

}