const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  description: String,
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Create the model
const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;