setTimeout(() => {
  console.log(2);
}, 1000);

Promise.resolve().then(() => {
  console.log(3);
}).then(() => {
  console.log(4);
})

process.nextTick(() => {
  console.log(5)
})

console.log(1);

//无论settimeout的时间为多少都会有4ms的延迟

function sleep(num) {
  var now = new Date();
  var exitTime = now.getTime() + num;
  while(true){
    now = new Date();
    if(now.getTime() > exitTime){
      return;
    }
  }
}
// sleep函数常用来暂停一段时间的代码执行。不会被挂起

console.log(1);
console.log(2);
sleep(2000);
console.log(3);