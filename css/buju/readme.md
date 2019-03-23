# 清除浮动的几种方法
1. 在父元素底部加上一行代码  <div style="clear:left"></div>

2. 在父元素css中加上
div.content{
    float:left;
}
3. 使用CSS 中的伪类 after,给父元素div添加一个clearFix的class类
.clearFix{
    content:'';
    display:block;
    clear:both;
}
4. 利用BFC简称（块级格式化上下文）的效果来弥补父容器的高度塌陷
div.content{
      overflow:auto;hidden;scroll;
    }
5. 尼古拉斯大师 方法，把父容器的display设置为table，可以创建一个匿名表格单元，直接触发BFC效果

.content{
    display:table;
}
但是不推荐使用