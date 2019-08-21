const Koa = require('koa');
const fs = require('fs');
const route = require('koa-route'); 
const serve = require('koa-static');
const path = require('path');
const app = new Koa();
// 中间件 即是函数
// const main = ctx => {
//   // ctx.response.body = 'hello world'
//   // 要传文件，创建一个文件流-- 可读流、写流
//   // ctx.response.type = 'html';
//   // ctx.response.body = fs.createReadStream('./template.html');
//   // if(ctx.request.path != '/') {
//   //   ctx.response.type = 'html';
//   //   ctx.response.body = '<a href="/">index page</a>'
//   // }else{
//   //   ctx.response.body = 'Hello World';
//   // }
// }
const about = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index page</a>'
}
const main = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = 'Hello Main <a href="/about">About page</a>'
}
const redirect = ctx => {
  ctx.response.redirect('/');
  ctx.response.body = '<a href="/">Index page</a>'; //这里不会执行，因为直接跳转到'/'了
}
// 中间件是串联的，一直循环执行

//先是通过 加载serve的静态资源，没有匹配到之后就到 route 
app.use(serve(path.join(__dirname, 'a')));
// app.use(serve(path.join(__dirname, 'assets'))); //如果匹配到assets目录下的文件就显示静态资源，如果没有就通过route跳转到别的页面
app.use(route.get('/', main));  //返回一个函数
app.use(route.get('/about', about));
app.use(route.get('/redirect', redirect));
app.use(main)
app.listen(3000)