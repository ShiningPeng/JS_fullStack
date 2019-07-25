// 在node中把前端的方法api称为中间件
//引入资源文件
var createError = require('http-errors');
var express = require('express');
var path = require('path');//node自带的
var cookieParser = require('cookie-parser');
var looger = require('morgan');

//引入index.js路由配置文件
var indexRouter = require('./routes/index');
//引入user.js路由配置文件
var userRouter = require('./routes/user.js');