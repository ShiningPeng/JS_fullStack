//一、
// function Person(name){
//   this.name = name;
// }
// let p = new Person('wn')
//1. p.__proto__等于什么
//Person.prototype
//2. Person.__proto__等于什么
//Function.prototype
// 3. Function.prototype 等于 Object
// 实例的__proto__(隐式原型链)等于其构造函数的prototype

// var foo = {},
//     F = function(){};
// Object.prototype.a = 'valA'
// Function.prototype.b = 'valB'
// //会往下继承，不会往上，给Function的属性不会添加到Object上，给Object添加的属性会往下继承给Function
// console.log(foo.a);//valA
// console.log(foo.b);//undefined
// console.log(F.a);//valA

//二、
// function Person(name){
//   this.name = name;
//   return {};
//   // return 666;
// }
// let o = new Person('wn')
// console.log(o);
//--------构造函数是不需要返回值的，使用new来创建对象时（实例化），如果return的是非对象，会忽略返回值，不过return的是对象，则返回该对象(若return null 也会忽略返回值)

// 三、
// function Person(name) {
//   this.name  = name
// }
// function Student(){

// }
// Student.prototype = Person.prototype;
// Student.prototype.constructor = Student;
// //无法继承Person的属性，普通函数的原型链连接到构造函数上，
// let s = new Student('wn');
// console.log(s instanceof Person);//true


// 四、
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
//打印10个10，
// 要打印出0-9
// 1.把var改为let
// 2. 闭包,
for (var i = 0;i<10;i++){
  (function(i){
    setTimeout(() => {
      console.log(i);
    }, 0);
  })(i);
}

// let每次循环会生成一个封闭的作用域和setTimeout绑定，而var每次循环会覆盖掉上一次的作用域