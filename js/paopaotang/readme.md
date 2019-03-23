- 函数有多种运行方式
Player()普通方式，
new Player() 作为构造函数constructor被运行,
会有返回新对象，叫做实例
构造函数 ，当然是类，
function Person(){ }
- 函数是一等对象，是一个可以被执行的对象，
this 常在 借助它来构造新的对象
var player1 = new Person()
this => player1    Person{ }
- new 的过程
this 空的对象Person{} 
Person() 是一个构造函数,
this.name = name 
