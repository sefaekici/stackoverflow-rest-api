const express = require("express");
const dotenv = require("dotenv");
const auth = require("./routers/auth");
const questions = require("./routers/questions");

//Environment Variables
dotenv.config({
  path: "./config/env/config.env",
});

const app = express();

//localhost:5000/api
app.use("api/questions", questions);
app.use("api/auth", auth);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started on PORT:${PORT}`));
