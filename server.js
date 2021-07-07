const express = require("express");
const dotenv = require("dotenv");
const routers = require("./routers/index");
const connectDatabase = require("./helpers/database/connectDatabase");

//Environment Variables
dotenv.config({
  path: "./config/env/config.env",
});

const app = express();
//Connect To MongoDb Database
connectDatabase();

//localhost:5000/api
app.use("/api", routers);
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started on PORT:${PORT}`));
