##defineProperty
1. 不能监测未来的一个属性，也就是只能监测defineProperty函数的第二个参数，的那个属性，而其他的属性是监测不到的
2. 不能监测数组

##proxy
1. 监测数组
2. 可以监测对象的新加的属性，而且多达 13 种拦截的方法，不仅是get和set
使用方法：
let newObj  = new Proxy(要监测的对象, {
  //要监测的方法
  方法名:function(该方法所需的参数){
    //需要做的操作
    return Reflect.方法名(所需参数);
  }
})

之后对newObj进行操作时就能监测到响应的方法