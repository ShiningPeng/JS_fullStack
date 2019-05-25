- npm run 运行 script 里的 各种工作流脚本
  一定要在根目录下运行
  1. dev 开发时运行的脚本
  2. start 启动服务器的脚本
    live-server
  3. build 开发完成之后，一键build 生成上线文件
   compressed 压缩过后的
   - webpack bundle 打包工具 ，一切皆可打包
   1. webpack 默认配置是在src/index.js   打包之后在dist/main.js
   2. webpack-cli 命令行工具
   3. webpack-dev-server 运行 webpack编译的同时启动8080端口，web-server 


- html template
     1. css
     2. js

- resolve里extension 加后缀
  module里加 rules:[
   规则
   js->babel->loader->preset->env
   css->style-loader,
   css-loader
   stylus->stylus,
   stylus-loader
  ]

- 一切皆可打包，打包为可运行的js
  生成的文件，最好js css 分家
  一个文件 ，Http请求
  并发多个请求  所以拆成少数几个文件
  js css 文件分离，这是必须做的

  webpack 工作当中 样式的抽离
  





     中括号中表示变量，filename:'[name].js'