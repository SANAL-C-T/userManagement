const express = require("express");
const allRoute = express.Router(); 

const userController = require("../controller/userController");
const adminController=require("../controller/adminController")
const multerUploads=require("../middleware/uploadImage")

//userRelated
allRoute.post("/signup", userController.signup);
allRoute.post("/login", userController.Login);
allRoute.post('/uploadEdits', multerUploads.profileImage, userController.Editprofilepage);

//common


//adminRelated




module.exports = allRoute; 
