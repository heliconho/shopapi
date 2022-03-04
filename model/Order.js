const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId : {ref:'User',required:true},
  products: [{
    productId : {ref:'Product', required:true},
    quantity:{type:Number,default:1, required:true, min:1},
    price: {type: mongoose.Decimal128, required:true}
  }],
  amount:{type: mongoose.Decimal128, required:true, min:1},
  address:{type:Object,required:true},
  shippingMethod: {
    type: String,
    enum: ['Pickup', 'Mail'],
    required: true
  },
  isCreated:{type:Boolean,default:true},
  isConfirmed:{type:Boolean, default:false},
  isShipped:{type:Boolean, default:false},
  isFulfilled: {type:Boolean, default:false}
},{timestamps : true}
);

module.exports = mongoose.model("Order", orderSchema);