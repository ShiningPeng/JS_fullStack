const path = require('path');
const Koa = require('koa'); //node 开发框架
const server = require('koa-static');
const route = require('koa-route');
const axios = require('axios');
const main = server(path.join(__dirname, '/public'));
//静态资源 区别于动态资源 ，动态是要用到数据库的
const clientID = '894dae573bd375c1be5e';
const clientSecret = '11bcf014931a8cd1c2d04733e28ea40ccb8aa5f6';
//从前端思维切到后端思维
const oauth = async ctx => {
// 可以await 数据库查询等
// await 请求
console.log(ctx.request, ctx.request.query.code, '-------------');
const str = await new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('等了3秒钟')
    }, 3000)
});
// console.log(str);
//code => token
const requestToken = ctx.request.query.code;
const token_url = 'https://github.com/login/oauth/access_token?' +
        `client_id=${clientID}&` +
        `client_secret=${clientSecret}&` +
        `code=${requestToken}`;
console.log(token_url);
const tokenResponse = await axios({
    methos: 'post',
    url: token_url,
    headers: {
        accept: 'application/json'
        }
    });
const accessToken = tokenResponse.data.access_token;
const result = await axios({
    methos: 'get',
    url: 'https://api.github.com/user',
    headers: {
        accept: 'application/json',
        Authorization: `token ${accessToken}`
    }
});
console.log(result.data, '---------')
const avatar_url = result.data.avatar_url;
ctx.response.redirect(`/welcome.html?avatar_url=${avatar_url}`);
}
// ctx是上下文环境

//public 文件夹让用户可以访问到
// 路由  网站是提供资源的
const app = new Koa(); //后端应用 
app.use(main);
app.use(route.get('/oauth/redirect', oauth))
app.listen(8080); //简化了node 里createServer服务