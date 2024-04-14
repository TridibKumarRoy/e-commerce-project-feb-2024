const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: [true, "please enter service name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "please enter service description"],
  },
  price: {
    type: Number,
    required: [true, "please enter service price"],
    maxLength: [8, "price cannot exceed 8 character"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "please enter service category"],
  },
  subCategory: {
    type: String,
    required: [true, "please enter service sub category"],
  },
});

module.exports = mongoose.model("Service",serviceSchema)