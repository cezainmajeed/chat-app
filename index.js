const express = require("express");
const cors = require("cors");


const Router = require("./routes/route.js");


const app = express();
app.use(cors());

app.use("/",Router);


app.listen(8000,function(){
  console.log("server is listening to port 8000");
});
