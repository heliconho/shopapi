const { verifyTokenAndAdmin, verifyToken, verifyTokenAndAuthorize } = require('./verifyToken');
const Order = require('../model/Order');
const router = require('express').Router();


//Create Order
router.post("/create",verifyToken,async (req,res) => {
  const neworder = new Order(req.body);
  try {
    const savedorder = await neworder.save();
    res.status(200).json(savedorder);
  } catch (err) {
    res.status(500).json(err);
  }
})
//UPDATE
router.put("/:id", verifyTokenAndAuthorize, async (req, res) => {
  try {
    const updatedorder = await Order.findByIdAndUpdate(req.params.id,{$set: req.body,},{ new: true });
    res.status(200).json(updatedorder);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET Order
router.get("/find/:userId", verifyTokenAndAuthorize, async (req, res) => {
  try {
    const order = await Order.findOne({userId:req.params.id});
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET ALL
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET ORDER BY Date
router.get("/orders", verifyTokenAndAdmin, async (req, res) => {
  const startRange = req.params.start;
  const endRange = req.params.end;
  const orders = Order.find({
    createdAt:{
      $gte: ISODate(startRange),
      $lt: ISODate(endRange)
    }
  })
  res.status(200).json(orders)
});
// GET MONTHLY INCOME
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
