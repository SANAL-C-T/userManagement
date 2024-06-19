const express = require("express");
const allRoute = express.Router(); 

const userController = require("../controller/userController");

allRoute.post("/signup", userController.signup);

module.exports = allRoute; 
