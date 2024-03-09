require('dotenv').config();
const app = require("./app");
const connectDB = require("./config/databose")


const port =process.env.PORT || 5000;
 
connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`);
    })
})