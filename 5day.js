const os = require("os");
console.log(os.cpus().length); // 查看cpu的数目
console.error("error");
console.warn("warn");
console.time("label");
let  i = 0;
while (i++){
    if(i>100){
        break;
    }
}
console.timeEnd("label");