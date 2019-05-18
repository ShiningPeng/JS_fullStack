一万条数据，要插入到网页中，怎么做？
DOM 要注意什么?

- 内存开销最大的在动态DOM上
  DOM开销是最耗内存的 
  createElement?可以优化一下
  cloneNode 节点克隆
- 一次性innerHTML
  10000条DOM显示是负担
  延迟加载 图片，
  分屏加载 html
  浏览器的负担是绘制Html,重绘和重排  导致网页卡顿的原因

- 不能一下搞定 分屏加载
    10000条数据 
  - 数据分页 page  上一页的数据 当前页的数据 下一页的数据
    前端自主分页
  - 防抖 + onscroll
    跟onReachBottom 一样 
    当前的数据 ，超出了视窗 viewport

     