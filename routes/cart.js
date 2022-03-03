const { verifyTokenAndAdmin, verifyToken, verifyTokenAndAuthorize } = require('./verifyToken');
const Cart = require('../model/Cart');
const router = require('express').Router();


//Create cart
router.post("/create",verifyToken,async (req,res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
})
//UPDATE
router.put("/:id", verifyTokenAndAuthorize, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{$set: req.body,},{ new: true });
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET Cart
router.get("/find/:userId", verifyTokenAndAuthorize, async (req, res) => {
  try {
    const cart = await Cart.findOne({userId:req.params.id});
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;