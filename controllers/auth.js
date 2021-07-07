const User = require("../models/User");

const register = (req, res, next) => {
  const name = "Sefa Ekici245";
  const email = "ssefaekici2356@gmail.com";
  const password = "123456";

  //async await
  User.create({
    name,
    email,
    password,
  })
    .then((data) => {
      res.status(200).json({
        success: true,
        data: data,
      });
    })
    .catch((err) => next(err)); //catch içerisnde hata yakalandı ve next parametresi yardımı ile error handlera gönderilmiş oldu.
};

module.exports = {
  register,
};
