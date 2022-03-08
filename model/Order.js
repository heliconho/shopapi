const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId        : {ref:'User',required:true},
    cartId        : {ref:'Cart',required:true},
    products      : [{
      productId: {ref:'Product', required:true},
      quantity: {type:Number,default:1, required:true, min:1},
      price: {type: mongoose.Decimal128, required:true},
      isFulfilled: {type:Boolean, default:false},
      fulfilledAt: {type:number},
    }],
    amount        : {type: mongoose.Decimal128, required:true, min:1},
    // address       : {type:Object, required:true},
    shippingMethod: {type: String, enum: ['Pickup', 'Mail'], required: true},
    pickUpTime    : {type: Number}, // only when shipping method is pickup
    confirmation   : {
      isConfirmed: {type: Boolean},
      confirmedAt: {type: Number}
    },
  },
  {
    timestamps    : true
  }
);

module.exports = mongoose.model("Order", orderSchema);