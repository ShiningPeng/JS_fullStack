传统的MVC后端开发

MVVM
Model 来自于Page({data:{}})
View Template wxml
VM {{}} wx:for

MVC 是经典的Web开发模式
Model 数据库
V View 静态页面
V Controller 

Web HTTP服务器 
端口？ 3000 
Mysql  3306
不同的端口提供不同的服务
WebServer  80

用户 Request 通过IP + 端口 
Web Server Response 

http
  .createServer(function(request,response){
    //request 每个用户的请求，response 是服务器的响应
    //http服务是一个连完即断的服务，不是一个常链接服务

  })
  .listen(8080)