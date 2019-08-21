// // const bufFromStr = Buffer.from('hello buffer'); //from中传递的是传给Buffer的内容
// // // 输出的为 ASCII 的 16 进制形式
// // console.log(bufFromStr);

// // 创建一个长度为 32、且用 0 填充的 Buffer。
const alloc = Buffer.alloc(32);  //传递的是申请的大小
alloc.write('123456789');
// console.log(alloc.toString());//这里的toString可以添加编码的方式，不填默认是utf-8
 const fs = require('fs');
//  fs的readFile 未指定格式时是 Buffer
 fs.readFile('./cxk.jpg',(err, data) => {
   console.log(Buffer.isBuffer(data));
   fs.writeFile('./cxk.png', data, () => {})
   const anotherBuffer = Buffer.from(data).toString('base64');
  //  console.log(anotherBuffer);
   const decodeImage = Buffer.from(anotherBuffer, 'base64');//第二个参数为这段Buffer的编码格式
   console.log('对比',Buffer.compare(data, decodeImage)); // 0代表相等
   fs.writeFile('cxk1.jpg', decodeImage, () => {})
 })