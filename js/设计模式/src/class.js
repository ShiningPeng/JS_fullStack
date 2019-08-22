//装饰 类
// 所有用decorator@这个符号的永远都是一个方法,都可以收到原来的信息，在target接收到
// function name (target) {
//   //获取原来的东西
//   target.ame = 'lilei';
//   console.log(target);
// }

function name(pName) {
  return function(target) {
    target.aaa = pName;
  }
}
@name('lilei')
// 没有做装饰的话原来的东西能用，装饰的话@name就能够增强
class  Man {
}

@name('lihuahua')
class Woman{

}
console.log(Man.aaa,Woman.aaa);