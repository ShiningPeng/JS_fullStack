oauth 用于第三方登录

- 后端开发很简单， new Koa()就好
  其他语言很复杂 
- 显示首页
  暴露资源
  1. .html .css .js 
      静态资源
      /public 公开的目录 不需要登录的
      koa-static 对静态资源的加持
      http://loaclhost:8080/{path}
  2. 动态资源,async 异步地到数据库里取数据 在开发中叫Model(数据库)
  Controller(控制器) View(视图模型)
  URL Universal Resource Location
  url ->查找相应的路径的控制器(路由)->Model ->View
  3. koa的思路
    极简 
    要使用时 app.use(callback、函数) 
    就可以
    callback 叫中间件
    请求(ctx.request) 中间件 响应response()
  4. ctx 上下文环境
    ctx.request, ctx.response
    支持async 在其中可以做数据库查询 远程调用java服务
    客户端发起请求(用户代理浏览器) -> node(koa 8080)(IP地址解析过程) -> route(中间件 相应的资源，显示页面)(await一下) -> java 远程处理(rpc) -> database 
    koa koa-static koa-route

- oauth
  第三方登录
  A  Github/微信/QQ  用户
  A 要拿用户的信息 , 用户的信息在第三方 , oauth 的第一步获取用户授权
  第三方网站就通过 下一个令牌环 token A A每次带上这个令牌去第三方网站上取数据
  1. 首先到第三方网站上登记一下
  2. 如果用户同意，第三方网站会通过callback访问你的callback地址 /oauth/redirect
    下发一个 code(一个加密串) 换一个token ，就是一个通行证，时效为两个小时