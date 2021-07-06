const express = require("express");
const dotenv = require("dotenv");
const routers = require("./routers/index");

//Environment Variables
dotenv.config({
  path: "./config/env/config.env",
});

const app = express();

//localhost:5000/api
app.use("/api", routers);
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started on PORT:${PORT}`));
