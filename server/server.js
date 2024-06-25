const express = require("express");
const cors = require("cors");
const app = express();
const path = require('path');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads'));

const urlRoutes=require("./router/router")
app.use('/api', urlRoutes);


app.listen(5000, () => {
  console.log("Server started on port 5000");
});
