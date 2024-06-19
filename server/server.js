const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const urlRoutes=require("./router/router")
app.use('/api', urlRoutes);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
