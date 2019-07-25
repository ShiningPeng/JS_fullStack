var express = require('express');
var fs = require('fs');//node自带的
var router = express.Router();

//获取对首页的操作
router.get('/', function(req, res,next){
  //可以做下面的一些配置
  //res.statusCode = 200
  //res.setHeader('Content-Type','application/json')
  function readImage(){
    fs.readFile(path, 'binary', function (err, file) {
      if(err){
        return;
      }else{
        res.writeHead(200, {'Content-Type':'images/jpeg'});
        res.write(file, 'binary');
        res.end()
      }
    })
  }
  readImage('/public/images/head.jpeg',res);
})

module.exports = router;

// 服务器端渲染
// nuxt