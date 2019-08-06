function myPromise(constructor) {
  let self = this;
  self.status = "pending"  //初始化状态
  self.value = undefined;  //定义一个resolve时候的状态，
  self.reason = undefined;  //定义一个reject时候默认抛出的状态
  //promise的状态是不可逆的
  function resolve(value) {
    if (self.status === "pending") {
      self.value = value;
      self.status = "fulfilled";
    }
  }

  function reject(reason) {
    if (self.status === "pending") {
      self.reason = reason;
      self.status = "rejected";
    }
  }
  //捕获构造异常
  try {
    constructor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

myPromise.prototype.then = function (onFullfilled, onRejected) {
  let self = this;
  switch (self.status) {
    case 'fulfilled':
      onFullfilled(self.value); break;
    case 'rejected':
      onRejected(self.reason); break;
    default:

  }
} 

var p = new myPromise((resolve, reject) => {
  resolve(1);
})
p.then((res)=>{
  console.log(res);
})