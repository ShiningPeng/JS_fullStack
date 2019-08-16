##DOM
将一个文档建模为一个对象， 通常是一棵树
我们可以使用js操作树上的每个节点， 关联事件

##ATTR(属性)
```html
<p style="" class="" data-item=""></p>
```
getAttribute
setAttribute

## Document
整个树的入口
document.documentElement 获取整个html节点
不止documemt.forms
还有如
document.images
document.scripts
document.all
等等

##  Event
事件流
事件模型
说的都是 **捕获冒泡机制**

## Element 
- 获取元素属性的一些api
.clientHeight
.clientWidth
.clientTop
.clientLeft

.scrollHeight   元素滚动的高度

.getBoundingClientReact() 返回元素大小，及其相对于视窗的位置

##  Node
nodeType  节点类型
下一个同级节点  nextSlibing
上一个同级节点  previousSlibing
所有子节点：  
childNodes  所有节点
elementNodes  只获取元素节点

remove
append
appendChild

clone 把某个元素的所有节点克隆到另一个节点

##  MutationObserver
监测 dom 树的改变 