const express = require("express");
const allRoute = express.Router(); 

const userController = require("../controller/userController");
const adminController=require("../controller/adminController")

//userRelated
allRoute.post("/signup", userController.signup);
allRoute.post("/login", userController.Login);
allRoute.get('/userdata/:id', userController.Homepage);

//common


//adminRelated




module.exports = allRoute; 
