const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter your name"],
  },
  category: {
    type: String,
    required: [true, "please enter choose category"],
  },
  email: {
    type: String,
    required: [true, "please enter your email"],
  },
  message: {
    type: String,
    required: [true, "please enter your message"],
  },
});

module.exports = mongoose.model("Contact", contactSchema);