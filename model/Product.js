const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name        : {type:String, required:true},
    brand       : {type:String},
    slug        : {type:String, required:true, unique:true},
    sku         : {type:String, required:true, unique:true},
    description : {type:String, required:true},
    category    : {type:Array},
    keyword     : {type:Array},
    length      : {type: mongoose.Decimal128},
    height      : {type: mongoose.Decimal128},
    width       : {type: mongoose.Decimal128},
    weight      : {type: mongoose.Decimal128},
    weightUnit  : {type: String},
    size        : {type: String},
    color       : {type:String, required:true},
    image       : [{url: String, isThumbnail: Boolean, order: Number}],
    isActive    : Boolean,
    quantity    : {type:Number, required:true},
  },
  {
    timestamps  : true
  }
);

module.exports = mongoose.model("Product", productSchema);