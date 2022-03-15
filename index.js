//----------node packages------------
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

//-------------components------------
const Router = require("./routes/route.js");
const Connection = require("./database/db.js");

const app = express();
app.use(cors());

//-------------Database--------------
const URL = process.env.MONGO_URI;
Connection(URL);


app.use("/",Router);


app.listen(8000,function(){
  console.log("server is listening to port 8000");
});
