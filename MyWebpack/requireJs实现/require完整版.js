const factories = [];

function define(moduleName,depend,fn){
    factories[moduleName] = fn;
    fn.depend = depend;
}

function require(mods,callback){
    let result = mods.map((mod)=>{
        require(factories[mod].depend,(...arg)=>{
            return factories[mod](arg);
        });
    });
    callback(...result);
}

define("add",[],function () {
    return "我是add";
});

define("min",["add"],function () {
    return "我是min";
});

require(["add","min"],function (min) {
    console.log(min);
});