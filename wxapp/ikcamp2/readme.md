## h5 vs 小程序
- 更好地体验
- 更强大的功能

##设计项目
1. 配置
2. 多处公用的方法
  1. 防抖 util
3. 环境的区分
  1. 开发环境
    1. 错误提示 日志打印 更好地开发体验
  2. 测试环境
  3. 线上环境
4. css划分
  1. reset.css 重置
  2. base.css 公用的css
5. 请求封装
  1. 要传一个请求头header:{
    content-type:
  }
  wx.request({content-type, x-abc})  //a页面 请求回来的状态码对不对
  wx.request({content-type}, abc)  //b页面
  在请求时其页面都要加上content-type这个字段
  2. 请求字段统一处理


##两个页面之间传递数据

放在app.js的globalData中
storage 
通过页面url /detail/index?id=xxx

订阅发布者模式
  A：触发一个事件（发布者）
  B：监听该事件（订阅者）

##e.target vs e.currentTarget
  e.target :触发事件的目标元素（点击了谁谁就是e.target）
  e.currentTarget ：绑定事件元素（谁绑定了这个事件谁就是e.currentTarget）

## js
1. ECMAScript :规定了 Js 的语法
2. DOM ：文档对象模型
3. BOM ：浏览器对象模型
      和浏览器相关的  history 窗口的resize  ...


  