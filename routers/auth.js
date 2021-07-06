const express = require("express");

//Burası Bir Middleware Dir
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Auth Home Page");
});

router.get("/register", (req, res) => {
  res.send("Auth Register Page");
});

module.exports = router;
