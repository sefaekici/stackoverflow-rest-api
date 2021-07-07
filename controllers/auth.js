const User = require("../models/User");

const register = async (req, res, next) => {
  const name = "Sefa Ekici2";
  const email = "ssefaekici23@gmail.com";
  const password = "123456";

  //async await

  const user = await User.create({
    name: name,
    email: email,
    password: password,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
};

module.exports = {
  register,
};
