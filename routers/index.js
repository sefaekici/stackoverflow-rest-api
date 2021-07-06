const express = require("express");
const routers = express.Router();
const questions = require("./questions");
const auth = require("./auth");

//localhost:5000/api/....
routers.use("/questions", questions);
routers.use("/auth", auth);

module.exports = routers;
