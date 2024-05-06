require('dotenv').config();
const app = require("./app");
const connectDB = require("./config/database")
// import Razorpay from "razorpay"
const Razorpay = require("razorpay");




// exports.instance = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });


//*handling uncaught error     
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to uncaught error`);
    process.exit(1);
})

const port =process.env.PORT || 5000;
 
const server = connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`);
    })
})

//*unhandled promise rejection
process.on("unhandledRejection",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled promise rejection`);

    server.close(()=>{
        process.exit(1);
    })
})