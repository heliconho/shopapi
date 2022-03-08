const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product     : {ref: 'Product'},
    price       : mongoose.Decimal128,
    isPromoted  : {type: Boolean},
  },
  { 
    timestamps  : true 
  }
);

module.exports = mongoose.model("Listing", listingSchema);