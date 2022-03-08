const mongoose = require("mongoose");

const productImageSchema = new mongoose.Schema(
  {
    name        : {type:String, required:true},
    product     : {ref: 'Product', required:true},
    thumbnailUrl: {type:String, required:true},
    imageUrl    : {type:String, required:true}
  },
  {
    timestamps  : true
  }
);

module.exports = mongoose.model("Product", productSchema);