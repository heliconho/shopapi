const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product: {type: ref},
    price: mongoose.Decimal128
  },
  {timestamps : true}
);

module.exports = mongoose.model("Listing", listingSchema);