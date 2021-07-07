const express = require("express");
const { register } = require("../controllers/auth");
//Burası Bir Middleware Dir
const router = express.Router();

//varsayılan olarak parametreler verilir register() değil register olarak kullanılır.
router.post("/register", register);

module.exports = router;
