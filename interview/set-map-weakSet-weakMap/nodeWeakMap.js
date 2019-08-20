//运行 node --expose-gc nodeWeakMap.js
global.gc();
let memo = process.memoryUsage();
console.log(memo);

let mp = new WeakMap();
let array = new Array(1000000);
mp.set(array, '123');   //不计入垃圾回收机制，引用计数不变
global.gc();
console.log(process.memoryUsage());

array = null;
global.gc();
console.log(process.memoryUsage());