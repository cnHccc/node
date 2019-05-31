const express = require("express");
const parserCookie = require("cookie-parser");
const app = express();

app.use(parserCookie("56dwedewqd516ew1d56weewd"));


app.use("/",function (req,res) {

    req.secret = "56dwedewqd516ew1d56weewd";

    res.cookie("name","hanchao",{
        path:"/",
        maxAge:1000*3600,
        signed:true
    });
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send("cookie设置成功");
    res.end();
});

app.listen(8080);