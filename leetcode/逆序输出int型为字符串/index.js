/**
 * 编写一个函数，输入int型，返回整数逆序后的字符串，要求使用递归函数调用，不能用全局变量，只传入一个参数，必须返回字符串
 * 如：输入1234，返回 "4321"
 */

function reverseAndToString(num) {
  if(Object.prototype.toString.call(num) !== ['object Number']){
    return ''
  }
  return num.toString().split("").reverse().toString().replace(/\,/g,'')
  // .join(",");
}
// var a = 1234;
// var b = 'aaaa';
// console.log(b)
// console.log(a.toString());
console.log(
  // Object.prototype.toString.call(
    reverseAndToString(1234)
    // )
    );