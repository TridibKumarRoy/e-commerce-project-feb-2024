const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter your name"],
        maxLength: [30, "name cannot exceed 30 charactors"],
        minLength: [4, "Name should have more than 4 characters"],
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password should be greater than 8 characters"],
        select: false,
    },
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    role: {
        type: String,
        default: "user",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
})

//* hashing the password 
userSchema.pre("save",async function(next){

    if(!this.isModified("password")){
        next();
    }
    
    this.password =await bcrypt.hash(this.password,10)
})

//* jwt token generation
userSchema.methods.getJWTtoken = function(){
    return jwt.sign({
        id:this._id
    },
    process.env.JWT_SECRET_KEY,
    {
        expiresIn:process.env.JWT_EXPIRE_IN
    }
    )
}

//* compare password
userSchema.methods.comparePassword =async function(password){
    return await bcrypt.compare(password,this.password);
}



module.exports = mongoose.model("User",userSchema);