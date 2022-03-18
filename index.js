//----------node packages------------
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

//-------------components------------
const userRoutes = require("./routes/userRoutes.js");
const Connection = require("./database/db.js");

//-----------------------------------
const app = express();
app.use(cors());
app.use(express.json());

//-------------Database--------------
const URL = process.env.MONGO_URI;
Connection(URL);

//------------Routing-----------------
app.use("/api/user",userRoutes);


app.listen(8000,function(){
  console.log("server is listening to port 8000");
});
