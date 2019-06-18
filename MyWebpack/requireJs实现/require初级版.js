const factories = [];

function define(moduleName,depend,fn){
    factories[moduleName] = fn;
}

function require(mods,callback){
    let result = mods.map((mod)=>{
        return factories[mod]();
    });
    callback(...result);
}



define("add",[],function () {
   return "我是add";
});

define("min",[],function () {
   return "我是min";
});

require(["add","min"],function (add,min) {
    console.log(add);
    console.log(min);
});