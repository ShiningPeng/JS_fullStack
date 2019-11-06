// weakSet 对象允许你将弱引用对象存储在一个集合中 --- 弱引用版本的Set
var test = {
  name:'test',
  content:{
    name:'wn',
    age:'18'
  }
}
var ws = new WeakSet();
ws.add(test.content);
// var a = { foo:'bar'};
// ws.add(a);
//console.log(ws)
// ws.delete(a);
console.log(ws);

const foos = new WeakSet();
class Foo{
  constructor() {
    foos.add(this);
  }
  methods() {
    if(!foos.has(this)){
      throw new TypeError('Foo.prototype.methods 只能在Foo的实例中调用')
    } 
  }
}