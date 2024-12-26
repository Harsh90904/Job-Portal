const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const role = require('../models/role');
const { sendMail } = require('../utils/mailer');
const otps = new Map();
const registerUser = async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await role.findOne({ email: email });
    if (user) {
      return res.status(403).json({ msg: "user already registered" });
    } else {
      let hash = await bcrypt.hash(password, 10);
      req.body.password = hash;
      user = await role.create(req.body);
      let data = {
        email: user.email,
        id: user.id,
        role: user.role,
        username: user.username,
        isActive: user.isActive,
      };
      let token = await jwt.sign(data, "private-key");
      console.log(token);
      let otp = Math.round(Math.random() * 10000);
      console.log(otp);

      otps.set(email, otp);
      console.log(otps);

      let html = `<div > 
         <h1>hello ${user.username}</h1>
         <a href=http://localhost:8090/user/verify/${token}/${otp}> verify</a>
      </div>`;
      console.log(
        `<a href=http://localhost:8090/user/verify/${token}/${otp}> verify</a>`
      );

      try {
        await sendMail(email, "verify", html);
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(201).json({
        msg: "user created",
        token: token,
        isVerified: user.isVerified,
      });
    }
  } catch (error) {
    res.status(500).json({ msg: "err", error: error.message });
  }
};

const loginUser = async (req, res) => {
  let { email, password } = req.body;
  let user = await role.findOne({ email });
  if (!user) {
    return res.status(404).json({ msg: "user not found" });
  }
  let isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(404).json({ msg: "invalid password " });
  }
  let data = {
    email: user.email,
    id: user.id,
    role: user.role,
    username: user.username,
    isActive: user.isActive,
  };
  let token = await jwt.sign(data, "private-key");
  return res
    .status(200)
    .json({ msg: "user loggedIn", token: token, isVerified: user.isVerified,isActive: user.isActive });
};

module.exports = {registerUser,loginUser}