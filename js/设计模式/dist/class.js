"use strict";

var _dec, _class, _dec2, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//装饰 类
// 所有用decorator@这个符号的永远都是一个方法,都可以收到原来的信息，在target接收到
// function name (target) {
//   //获取原来的东西
//   target.ame = 'lilei';
//   console.log(target);
// }
function name(pName) {
  return function (target) {
    target.aaa = pName;
  };
}

var // 没有做装饰的话原来的东西能用，装饰的话@name就能够增强
Man = (_dec = name('lilei'), _dec(_class = function Man() {
  _classCallCheck(this, Man);
}) || _class);
var Woman = (_dec2 = name('lihuahua'), _dec2(_class2 = function Woman() {
  _classCallCheck(this, Woman);
}) || _class2);
console.log(Man.aaa, Woman.aaa);