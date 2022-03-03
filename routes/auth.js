const router = require("express").Router();
const User = require("../model/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SALT
    ).toString(),
    isAdmin: !!req.body.isAdmin ?? false
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email
    });

    !user && res.status(401).json("Invalid Credential");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SALT
    );


    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    const inputPassword = req.body.password;

    originalPassword != inputPassword &&
      res.status(401).json("Invalid Credential");

    const accessToken = jwt.sign({
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWTSEC, {
        expiresIn: "3d"
      }
    );
      console.log(accessToken);
    const {
      password,
      ...others
    } = user._doc;
    res.status(200).json({
      ...others,
      accessToken
    });

  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;