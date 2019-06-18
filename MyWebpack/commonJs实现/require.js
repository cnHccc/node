const fs = require("fs");

function myRequire(modulePath) {
    let content = fs.readFileSync(modulePath,(err,data)=>{
       if(err) return null;
       return data;
    });

    let module = {
        exports:{}
    };

    let fn = new Function("modulePath","module",content + "\n return module");

    return fn(modulePath,module,content);
}

const inner  = myRequire("./exports.js");

console.log(inner.exports);