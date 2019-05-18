- npm 不只是包管理器，yarn 
还是工作流里的重要法则，
npm run scripts
- webpack
  bundler 打包器
  传统的前端html css js 文件
  半成品 ,开发工艺，打包成一个bundler
  css 要编译、压缩
  js 使用 babel es6789 -> es5 也要压缩
  html template 需要预编译 ，
  打包成一个可以发布的产品，

  - 项目有多种环境
    一个项目有多份代码
    start dev development 开发环境 代码环境 一般在本地 localhost
    test 测试环境 (npm run test)   局域网内，提交到内网的IP地址
    build --mode production compressed 生产环境 线上环境 线上的域名对应的服务器