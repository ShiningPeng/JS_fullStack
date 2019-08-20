//global
//gc 
global.gc();  //垃圾回收
var memo = process.memoryUsage(); //内存使用情况
console.log(memo);
let map = new Map();
let array = new Array(1000000);
map.set(array, '123');
global.gc();
console.log(process.memoryUsage());

map = null;
global.gc();
console.log(process.memoryUsage());

array = null;
global.gc();
console.log(process.memoryUsage());
