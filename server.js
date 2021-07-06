const express = require("express");
const dotenv = require("dotenv");

//Environment Variables
dotenv.config({
  path: "./config/env/config.env",
});

//localhost:5000/api

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Anasayfa");
});

app.get("/api/questions", (req, res) => {
  res.send("Hello Questions Home Page...");
});

app.get("/api/questions/delete", (req, res) => {
  res.send("Hello Questions Delete Page...");
});

app.listen(PORT, () => console.log(`Server started on PORT:${PORT}`));
