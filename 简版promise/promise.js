class MyPromise {
    constructor(fn){
        if(fn instanceof Function){
            this.PADDING = "padding";//进行状态
            this.REJECTED = "rejected";//拒绝状态
            this.FULFILLED = "fulfilled";//完成状态
            this.status = this.PADDING;//状态
            this.val = "";//值
            this.reason = "";//拒因
            this.resolveArr = [];//解决事件数组
            this.rejectArr = [];//拒绝事件数组
            //解决函数
            let resolve = (val) =>{
                //检测状态是否是padding
                if(this.status === this.PADDING){
                    this.status = this.FULFILLED
                }else {
                    return ;
                }
                console.log(val);
            };
            //拒绝函数
            let reject = (reason) =>{
                //检测状态是否是padding
                if(this.status === this.PADDING){
                    this.status = this.REJECTED
                }else {
                    return ;
                }
                console.log(reason);
            };
            //用interval把事件压入事件池
            let interval = setInterval(()=>{
                clearInterval(interval);
                try {
                    fn(resolve,reject);
                }catch (e) {
                    reject(e);
                }
            },0);
        }else {
            throw new Error("传进来的不是函数");
        }
    }
    then(){

    }
}
let promise = new MyPromise((resolve,reject)=>{
    //抛出错误会走reject
    // throw new Error("错误");
    console.log(1);
    resolve(3);
    reject();
});
console.log(2);

