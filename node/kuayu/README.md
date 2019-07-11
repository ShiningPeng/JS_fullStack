##跨域
跨域是浏览器的安全策略
同源策略：同协议 域名 端口，三者一致则为同源，否则不是
同源的情况下不存在跨域，不同源产生跨域问题


## CORS
规定了一组 http 的头部字段，作用是：
允许哪些网站可以通过浏览器有访问的权限
1. Access-Control-Allow-xxxx
2. cookie
3. 浏览器会先以 OPTIONS 请求方法发起一个预检请求(preflight) 请求，目的是获取允不允许当前的域请求，服务器允许，之后才会发起正式的请求

## 代理
1. nginx

反向代理：
http://localhost:9999/api
http://localhost:8888/api
不知道请求的哪台服务器

正向代理：
google
A -> proxy -> google.com
B -> proxy -> google.com

## iframe + postMessage
1. 前端页面 通过 iframe 引入一个后端目录下的 html， 
  iframe是不受同源策略限制的，所以可以通过iframe任意引入
2. postMessage用于在两个窗口之间传递数据
3. 前端页面通过postMessage向后端目录下的html传递接口需要的请求参数
4. 后端页面 通过postMessage 向前端页面传递 接口结果

## iframe + window.name
iframe共享 window.name

没有 postMessage 只能借助 中间页面 通知 前端页面拿到了数据 
window.parent.callback(window.name)

##jsonp
(重要程度仅次于cors)
jsonp的原理就是利用<script>标签没有跨域限制，通过<script>标签src属性，发送带有callback参数的GET请求，服务端将接口返回数据拼凑到callback函数中，返回给浏览器，浏览器解析执行，从而前端拿到callback函数返回的数据。

1. 定义一个回调
2. 将回调函数的名字 告诉后端 后端会返回
```js
  回调(res)
    ```
3. script 标签加载过后 执行 返回的内容

缺点：只能发起 GET 请求

写一个jsonp 的函数， 以 Promise 的方式调用
jsonp(url)
.then(res => {

})
