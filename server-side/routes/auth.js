const router = require("express").Router();
const User = require("../models/user");
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");
//REGISTER

router.post("/register", async (req, resp) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJs.AES.encrypt(
      req.body.password,
      process.env.PASS_WORD
    ).toString(),
  });
  try {
    const data = await newUser.save();
    resp.status(200).json(data);
  } catch (err) {
    resp.status(500).json(err);
  }
});

// Login
// router.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne({ username: req.body.username });
//     !user && res.status(401).json("Wrong credentials!");

//     const hashedPassword = CryptoJS.AES.decrypt(
//       user.password,
//       process.env.PASS_SEC
//     );
//     const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

//     OriginalPassword !== req.body.password &&
//       res.status(401).json("Wrong credentials!");

//     const accessToken = jwt.sign(
//       {
//         id: user._id,
//         isAdmin: user.isAdmin,
//       },
//       process.env.JWT_KEY,
//       {expiresIn:"3d"}
//     );

//     const { password, ...others } = user._doc;

//     res.status(200).json({...others, accessToken});
//   } catch (err) {
//      res.status(500).json(err);
//   }
// });

router.post("/login", async (req, resp) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && resp.status(401).json("user not found");

    const hashedPass = CryptoJs.AES.decrypt(
      user.password,
      process.env.PASS_WORD
    );
    const originalPassword = hashedPass.toString(CryptoJs.enc.Utf8);
      console.log(originalPassword)
    originalPassword !== req.body.password &&
      resp.status(401).json("wrong credencial");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_KEY,
      { expiresIn: "3d" }
    );
    const { password, ...others } = user._doc;
    resp.status(200).json({ ...others, accessToken });
  } catch (err) {
    resp.status(500).json(err);
    // console.log(err)
  }
});
module.exports = router;
