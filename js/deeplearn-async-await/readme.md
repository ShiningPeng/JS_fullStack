## async
async 函数就是 Generator 函数的语法糖,
如class 是 function.prototype的语法糖

## generate函数
```js
function* test (){
      let a = yield 1
      console.log(a);
      let b = yield 2
      console.log(b);
      let c = yield 3
      console.log(c);
    }
    var g = test();
```
通过g.next()一步一步调用，
每一步调用执行到yield关键词
通过在g.next()中传参，可作为上一个 yield 语句的返回值

##babel
{
  test:/\.js$/
  use:['babel-loader']
}
.babelrc

##Promise.resolve
返回一个Promise
1. 接收的参数如果是一个 Promise， 则直接返回该 Promise
2. 如果是一个值，则resolve(该值)