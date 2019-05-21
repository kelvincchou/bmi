const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000,function()
  {console.log("Express listen to 3000");}
)

app.get("/",function(req,res)
   {res.sendFile(__dirname + "/index.html")}
 )

 app.post("/",function(req,res){
    console.log(req.body);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 / (num2*num2);
    res.send("<h1>BMI = " + result + "</h1>");
  }  //End of req and res
 )
