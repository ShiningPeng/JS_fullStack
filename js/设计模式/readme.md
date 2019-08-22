## 设计模式有哪些
1. 发布订阅
  addEventListener
  onclick
  Event-bus
    //订阅
    event.on('click');
    event.on('receiveData');
    //发布
    event.emit('click')
    发布者发布时所有订阅者都要收到
2. 单例模式
  只存在一个实例，无论new多少次，都是指向同一个实例，为的是节约内存
  应用场景： 弹窗
3. 装饰者模式
  1. 动态增加功能，无侵入地（不破坏原来代码）
  2. 优点：没有装饰，可以用， 有了装饰者会 更好用
  目的：增强功能
  实现流程：
  1. 先取到原来的方法，
  2. 重新第一个新的方法，新的方法包含原来的方法，（为了不破坏原来的代码）
  

  ES7
  decorator @
  装饰
    1. 类
    2. 方法
    3. 属性

## babel
负责编译
怎么编译，全靠babel的插件（每个语法都对应一个插件）
const -> var 
promise -> 回调
Array.isArray(es6的) -> es5 ...
想把 es6 转为 es5  

presets: 一堆插件的集合
preset-env 的功能就是es6 转 es5，集合了很多插件。




