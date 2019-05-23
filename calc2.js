const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, () => {
  console.log("Express listen to 3000");}
);

app.get("/", (req, res, next) => {
     res.sendFile(__dirname + "/index.html")
});

 app.post("/", (req, res, next) => {
    console.log(req.body);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 / (num2*num2);
    res.send("<h1>BMI = " + result + "</h1>");
 });
