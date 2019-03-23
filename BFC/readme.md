# BFC的概念
Block Formatting Context(块级格式化上下文)

# BFC的渲染规则（原理）
1. BFC在页面上是一个独立的容器，最显著的效果就是建立一个隔绝的空间，外面
的元素不会影响BFC里面的元素，反之，里面的元素也不会影响外面的元素。
2. BFC的区域不会与浮动的元素box重叠
3. 垂直方向的外边距会发生边距折叠（包括父子元素，兄弟元素）水平方向不存在边距折叠
4. 计算BFC容器的高度的时候，浮动元素的高度也会计算在内

#BFC的创建条件
1. overflow的值不为visible
2. float的值不为none
3. 行内块级inline-block
4. 表格单元display:table-cell;(display带table,其父容器就会变成BFC容器)
5. 绝对定位（absolute,fixed）