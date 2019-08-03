基于 Vue2.0 + Vuex + VueRouter 全家桶实现方案模仿网易云音乐WebApp项目
CSS预编译工具使用的是Sass, 音乐上下滚动加载用的是betterscore,全面采用ES6风格代码

解决了哪些问题
- 图片懒加载  vue-lazyload
- 前后端分离  
    使用node.js NeteaseCloudMusicAPI  proxy
    8080 + 3000
- fastclick 
    npm install ,监听touchend事件，规避300ms延迟 
- 设计了store
  songs(播放列表)， index(索引)， song(当前播放歌曲)
  singer  mode(播放模式)  favoriteList(收藏)  searchHistory playHistory
- iconfont
- eslint


- 上班， vue项目，先不着急切页面写代码，分析清楚目录结构
  1. components/  跟路由挂扣  确定页面级别路由
  工作的入口
  2. store/ 全局共享状态  分模块 了解关键状态
  3. common/ 公共组件不用写
  4. api/ 确立前后端的协作方式


