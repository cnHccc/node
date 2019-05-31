const express = require("express");
const app = express();
const expressStatic = require("express-static");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
   extended:true,
   limit:2 * 1024 * 1024
}));

app.get("/index2.html",function (req,res) {
   res.send(req.query['user']);
   res.end();
});
app.post("/post.html",function (req,res) {
   res.send(req.body);
   console.log(req.body);
   res.end();
});

app.use(expressStatic("./www"));

app.listen(8080);