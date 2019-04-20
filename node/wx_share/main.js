// live-server 
{/* <script src="./fs.js"></script> */}
// require 进来   COMMONJS 模块化方案

const http = require('http');//require 的意思就是引入 
const https = require('https');
let i = 0;

http.createServer(function(request,response){
  i++;
  response.end(`Hello World${i}`);
})

  .listen(3000);
// Web服务在软件上理解就是一个http访问的服务
