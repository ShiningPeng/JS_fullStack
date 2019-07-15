- es6的class新特性
直接在{}中定义
ref = this.createRef();
ref = {this.ref}
- history  html5的api
//onPushState,onPopState
Search组件是Main的子组件
除非使用window.history//不建议
hoc(高阶组件) 包一层路由组件 ，通过 props 的 history
<Route><Search/></Route>
- 高阶组件
  能返回组件的函数， 接受组件作为参数称为高阶组件
  withRouter 来自 react-router-dom 封装一个组件，并为之提供 this.props.location 得到props