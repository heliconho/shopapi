const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  sku : {type:String,required:true,unique:true},
  productname : {type:String,required:true},
  description : {type:String,required:true},
  category : {type:Array},
  keyword : {type:Array},
  length: {type:Number},
  height: {type:Number},
  width: {type:Number},
  size : {type:String},
  color : {type:String,required:true},
  price : {type:Number,required:true},
  image : {type:String,required:true},
  status: {type:String,default:"active",required:true},
  quantity: {type:Number,required:true}
},{timestamps : true}
);

module.exports = mongoose.model("Product", productSchema);