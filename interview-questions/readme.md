# ques1  javascript全局执行上下文，为我们创建了两个东西：全局对象和this关键字
# __proto__和prototype
  万物都有proto，只有function才有prototype
  只有函数才有原型链,对象没有
  对象要看到原型直接.__proto__，就可以看到
  而函数要看到原型，需要.__proto__得到是用方法包起来的，就像是女孩子化了妆，再.__proto__之后才能看到素颜，也就是原型。

# new方法的执行原理
  1. 创建一个空对象，构造函数的this指向这个空对象
  2. 这个新对象被执行[原型]连接 
  3. 执行构造函数，将构造函数的属性或方法添加到this引用的对象上
  4. 如果构造函数中没有返回其他对象，那么返回this,即创建的新对象。否则，返回构造函数返回的对象

#ques2  call,bind,apply
  1. b.call(a) 相当于把b里面的作用域强行指向到a里面去，此时b就可以调用a里面的fn
  .call方法第一个参数是要this作用域指向的地方，后面的参数都是该作用域里要用到的值
  2. b.apply(a) 与 .call方法 用法一致，不一样的是，除第一个参数外的参数都要放到一个数组里，b.apply(a,[9,2])
  3. b.call() || b.apply() 此时this的作用域会指向window
  4. var c = b.bind(a);
     c();
     bind方法返回的是一个修改后的新的函数，所以该用函数该有的姿态去调用
     bind方法接收的参数是按照形参的顺序进行的

#ques3 浅拷贝和深拷贝
  1. 数组解构：
    let [x, y, z] = [1, 2, 3]
    //x=1,y=2,z=3
  2. 对象解构：
    let {foo, bar} = {foo:'aaa', bar:'bbb'}
    //foo='aaa',bar:'bbb'
    //另：允许给赋值的变量重命名 
      let {foo: baz} = {foo:'aaa'}
      //baz='aaa'
  3. 浅拷贝只是第一层属性进行拷贝，当第一层的属性为基本数据类型时，新对象和原对象互不影响，当第一层的属性为# 复杂数据类型 # 时，那么新对象和原对象的属性值其指向的是同一块内存地址(是同步更新的)
     深拷贝是将对象及值复制过来，两个对象修改其中任意一个的值，另一个的值不会改变

#ques4 闭包
  1. 什么是闭包？闭包是指有权限访问另一个函数作用域中的变量的函数
  2. 闭包的作用：(1)能够访问函数定义时所在的词法作用域(阻止其被回收)
                (2)私有化变量
                (3)模拟块级作用域
  所以尽量少使用闭包，不然会导致内存泄漏，项目，浏览器卡顿，进程等

##ques9 get 和 post 请求在缓存方面的区别
  get 请求是一个类似于查找的过程，用户获取数据，可以不用每次都与数据库连接，所以可以使用缓存。
  post 不同，post一般做的是修改和删除数据的工作，所以必须与数据库交互，所以不能使用缓存。
  因此，get请求更适合于请求缓存。
  get请求是加密的，

##ques10  url长度限制
  http协议并没有限制url的长度，是浏览器或者web浏览器做了url长度的限制，并且只针对于get请求做的限制。
  IE : 2803
  Firefox:65536
  Chrome:8182
  Safari:80000
  Opera:190000

##ques11  前端事件流
事件执行的时候发生了哪些事情?
先从外往里捕获，再从里向外冒泡。
在DOM标准的事件模型中，事件流包括下面几个阶段：
  1. 事件捕获阶段
  2. 处于目标阶段
  3. 事件冒泡阶段

  addEventListener 有第三个参数，第三个参数为true时为捕获事件，false为冒泡，默认是false，也就是默认执行冒泡。(IE浏览器只支持事件冒泡)

##ques12 图片懒加载
懒加载：最为服务器的前端优化，减少请求或延迟请求。(src为空，滑到哪些照片时才加载，把图片的url放到src里去)
预加载：在页面渲染之前就把图片资源请求回来，放在本地缓存中，需要查看图片时可直接从本地缓存中渲染，相当于请求本地图片一样。
因为会用到缓存，所以当图片很多时不建议使用。懒加载对服务器有一定的缓解压力的作用，预加载则会增加服务器的压力

##ques13 js中的各种位置
clientHeight:表示可视区域的高度，不包含border和滚动条
offsetHeight:表示可视区域的高度，包含border和滚动条 **offsetHeight = clientHeight + 滚动条 + 边框。**
scrollHeight：表示所有区域的高度， 包含因为滚动被隐藏的部分
clientTop:表示边框border的厚度， 在未指定的情况下一般为0
scrollTop:滚动后被隐藏的高度

##ques14 js拖拽功能实现


##ques16 click在 ios手机上有 300ms延迟，原因及解决方法
  原因：因为ios比较优雅，需要判断是否双击方法
1.  <meta name="viewport" content="width=device-width, initial-scale=no">
  initial-scale=no,300ms自动消失，不存在延迟
2. FastClick,其原理是：监测到touchend事件后，立刻发出模拟click事件，并把浏览器300ms之后真实发出的事件阻断

## 17 Cookie, sessionStorage, localStorage的区别
Cookie: 数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器之间来回传递，又要有接口请求，cookie就会自己上车。而sessionStorage 和 localStorage 不会自动把数据发给服务器，仅在本地保存。cookie还有路径(path)的概念，可以限制cookie只属于某个路径下，这里就是cookie会自己上车，但是指明上哪辆车，存储大小只有4k左右。

sessionStorage：仅在当前浏览器窗口关闭前有效，不能长久保存。

localStorage: 在所有的同源窗口都是共享的，cookie也是在所有同源窗口中共享的，localStorage的存储大小在5M左右
token放在cookie中在http请求可以每次自动返回给后端

##ques18 任务列表(event loop)
  marcotask(宏观任务)：
    setTimeout
    setInterval
    requestAnimationFrame
    HTML的解析
    js的主线程
    页面加载
    用户交互
  microtask(微观任务)
    promise
    mutation.oberver
    process.nextTick(node中自带的一个异步的方法)

script(主程序代码)执行的权重  >  process.nextTick   >   promise   >  setTimeout  >  setInterval  >  setImmediate  >  I/O  >  UI rendering