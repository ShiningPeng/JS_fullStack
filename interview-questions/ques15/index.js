function Animal(name) {
  this.name = name;
  this.sleep = function () {
    console.log(this.name + '睡着了');
  }
}
// 这样的构造函数是一个类，class是es6用来构造类的一个方法api
Animal.prototype.eat = function (food) {
  console.log(this.name + '正在吃' + food);
}

// // --------原型链的继承:new出来的实例拥有原型链上的属性和方法，
// function Cat() { }
// Cat.prototype = new Animal();
// Cat.prototype.name = 'cat';
// var cat = new Cat();
// console.log(cat.name);
// cat.eat('fish');
// cat.sleep();
// console.log(cat instanceof Animal) //true
// console.log(cat instanceof Cat) //true

// instanceof用来判断复杂数据类型
// Object.prototype.toString.call()  判断数据类型


//--------构造函数的继承
// function Cat(name){
//   Animal.call(this); //把Animal的作用域掰到了Cat
//   this.name = name || 'Tom';
// }
// var cat = new Cat('wn');
// console.log(cat.name);
// cat.sleep();
// // cat.eat('solt');
// console.log(cat instanceof Cat); //true
// console.log(cat instanceof Animal); //false
// // instanceof 判断原型链，A的隐式原型等于B的显示原型为true


//------组合继承:构造函数继承+原型链继承
// function Cat(name){
//   Animal.call(this); //把Animal的作用域掰到了Cat //构造函数继承
//   this.name = name || 'Tom';
// }
// Cat.prototype = new Animal()  //原型链继承
// let cat  = new Cat();
// console.log(cat instanceof Animal); //true


//--------寄生组合继承
function Cat(name){
    Animal.call(this); //把Animal的作用域掰到了Cat
    this.name = name || 'Tom';
  }
//匿名函数没有构造函数，具名函数才可以有构造函数
(function(){
  //创建一个没有实例方法的类
  var Super = function(){}
  Super.prototype = Animal.prototype;  //变成了一个有实例的方法
  Cat.prototype =  new Super()
})()
var cat = new Cat();
console.log(cat.name);
cat.sleep();
// cat.eat('solt');
console.log(cat instanceof Cat); //true
console.log(cat instanceof Animal);