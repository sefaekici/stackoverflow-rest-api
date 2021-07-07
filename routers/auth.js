const express = require("express");

//Burası Bir Middleware Dir
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Auth Home Page");
});

module.exports = router;
