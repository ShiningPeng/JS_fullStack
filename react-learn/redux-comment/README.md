## flux
提倡单向数据流
用户提交一个动作的时候(dispatch(action)) -> reducer（纯函数）-> state改变 -> 页面重新渲染

redux     单向数据流的思想，action,reducer,state都是属于redux的，是一个js库，原生js
react-redux 把redux的很多东西封装成了组件

需要分为
container组件：connect
component组件   只接收props的组件