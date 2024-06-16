const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountPrice: Number,
  productImg: {
    type: String,
    required: true,
  },
  company: String,
  productDetails:{
    type:Array
  },
  totalStock: Number,
  inStock: Boolean,
});

module.exports = mongoose.model("Products", ProductSchema);
