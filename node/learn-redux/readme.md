## redux 数据流
用来管理的是全局的数据
action 一个纯对象 {} 对象字面量
reducer 纯函数 ，这个函数的返回值决定了 store 里面的值,只依赖于入参(state, action),而且要返回一份【新】的数据，不能在原来的数据上修改
dispatch 全局数据要修改的话，dispatch(action) 修改数据
store 是状态的集合

每dispatch一次都会触发reducer,state会保存上一次dispatch时state的状态