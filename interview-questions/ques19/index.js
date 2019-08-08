var b = 10;
(function b() {
  let b = 20;
  console.log(b);
})()

//函数声明与函数表达式不同，函数声明只在函数内部有效，并且此绑定是常量绑定
// 不能对常量赋值
// 在自执行函数中定义一个函数相当于const一个常量

// 上诉代码相当于
// const b = function () { }
// b = 20;
// console.log(b);

// 重新定义b就可以解决方法名和变量名的问题
// let b = 20;   即可在console中打印出20