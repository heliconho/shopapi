// Carts have one created on and one updated on timestamps, 
// which the updated on timestamps will be used to check against new products

const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId      : {type:String,required:true},
    products    : [
      {
        listingId   :{ref:'Listing'}, 
        quantity    :{type:Number,default:1},
      }
    ]
  },
  {
    timestamps : true
  }
);

module.exports = mongoose.model("Cart", cartSchema);

