##为什么会出现concurrent
以前称为 async mode ，现在称为 concurrent mode
目的：让react 整体渲染有一个
1. js是单线程的
2. 浏览器是多线程的
  1. UI渲染线程(绘制页面)
  2. js解析
  3. http
3. js线程和 ui是互斥的（js可以操作dom）
4. 由于第三点，js占据了很大的空间，导致UI得不到响应，所以有卡顿的产生