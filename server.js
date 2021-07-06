const express = require("express");
const dotenv = require("dotenv");

//Environment Variables
dotenv.config({
  path: "./config/env/config.env",
});

//localhost:5000/api

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started on PORT:${PORT}`));
