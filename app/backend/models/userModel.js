const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter your name"],
    maxLength: [30, "name cannot exceed 30 characters"],
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
});

//* hashing the password
//* Runs before the document is saved to the database.
//* If the password field is modified, it hashes the password using bcrypt.
//* @param {Function} next - A function to call to continue processing.
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

//* Generates a JSON Web Token (JWT) that contains the user's ID.
//* @returns {string} The JWT.
userSchema.methods.getJWTtoken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE_IN,
  });
};

//* Compares the given password with the hashed password of the user document.
//* @param {string} password - The password to be compared.
//* @returns {boolean} `true` if the passwords match, `false` otherwise.
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//*passwords reset token
userSchema.methods.getResetPasswordToken = function () {
  //generating token
    const resetPassToken = crypto.randomBytes(20).toString("hex");
    
    this.resetPasswordToken = crypto.createHash("sha256").update(resetPassToken).digest("hex");

    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
    
    return resetPassToken;
};

module.exports = mongoose.model("User", userSchema);
