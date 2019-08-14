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
  