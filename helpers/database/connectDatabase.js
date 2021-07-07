const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config({
  path: "../../config/env/config.env",
});

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected To Database!"))
    .catch((err) => console.log(err));
};

module.exports = connectDatabase;
