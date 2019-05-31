const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer(function (req,res) {
    // if(req.url !== "/"){
    //     let url2 = url.parse(req.url,true);
    //     console.log("get",url2.query);
    //     console.log("get",url2.pathname);
    // }

        let data = "";
        req.on("data",function (d) {
            console.log(1);
            data += d;
        });
        req.on("end",function () {
            console.log(data);
        });

    fs.readFile("./1day/index.html",function (err,data) {
        if(err){
            res.write(err.toString());
        }else {
            res.write(data);
        }
        res.end();
    })
});

server.listen(8080);
