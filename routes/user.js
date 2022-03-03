const {
  verifyToken
} = require('./verifyToken');

const router = require('express').Router();

//update profile
router.put("/:id", verifyToken, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SALT
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id, {$set: req.body,}, {new: true}
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;