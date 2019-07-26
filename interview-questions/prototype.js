var a= {};
var b = Object.prototype;
console.log(a.prototype === b) //false
console.log(a.__proto__ === b)//true
console.log(Object.getPrototypeOf(a) === b)//true
// 浏览器的__proto__属性就相当于getPrototypeOf这个正式的api，后面两个console是一样的效果