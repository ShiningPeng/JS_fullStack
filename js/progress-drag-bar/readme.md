live-server启动
1. 三个容器，背后 100% 宽度的圆 已经拖拽了的进度条
2. touchStart  touchMove touchEnd
3. css改变 width, left

在创建元素的时候，initDom()，使用innerHTML会导致new 第二个progress实例时无法拖动，所以需要使用createElement来创建结构

设计api
```js
//将progress放入selector父容器中
new Progress('selector',{
  onDrag: () => {  },
  onDragStart: () => {},
  onDragEnd: () => {},
  progress:0.5,
  disagleDrag:false
})
```