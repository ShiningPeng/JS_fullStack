// // sleep(3000);
// // console.log('helloworld');

// // 实现一个功能 + 发散理解

// 1.promise
// const sleep = time => {
//   return new Promise((resolve, reject) => 
//     setTimeout(resolve, time))
// }

// sleep(2000).then(() => {
//   console.log('emmmm');
// })

// 2.generator
// function *sleepGenerator(time) {
//   // 碰到yield就会停下
//   yield new Promise((resolve, reject) => {
//     setTimeout(resolve, time);
//   });
//   console.log('aaa');
// }
// sleepGenerator(1000).next().value.then(() => {
//   console.log('一千年以后，这世界已没有我');
// })
// console.log(sleepGenerator().next().value);
// console.log(sleepGenerator().next());

/**
 * 
 * @param {自己写的} 
 async function sleepAsync(time) {
   await new Promise((resolve, reject) => {
     setTimeout(resolve, time);
   })
 }
 console.log(sleepAsync(1000).then(()=>{
   console.log('emmmmmmmm');
 }))*/

// 3.async await
// function sleep(time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, time);
//   })
// }
// async function output(){
//   let out = await sleep(2000);
//   console.log('1');
//   return out;
// }
// output();
// console.log('ddsjl');

// 4.callback回调函数
function sleep(callback, time) {
  if(typeof callback === 'function')
  setTimeout(callback, time);
}
sleep(function(){
  console.log('lllllll');
},2000)