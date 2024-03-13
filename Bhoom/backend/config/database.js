const mongoose = require("mongoose");

const URI = process.env.DATABASE_URI

const connectDB = async ()=>{
    try {
        await mongoose.connect(URI);
        console.log(`database connected successfully`);
    } catch (error) {
        console.log(error);
        process.exit(0);
    }
}

module.exports = connectDB;