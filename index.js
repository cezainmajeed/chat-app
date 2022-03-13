const express = require("express");

const app = express();

app.get("/",function(req,res){
  res.send("Hello!");
});


app.listen(3000,function(){
  console.log("server is listening to port 3000");
});
