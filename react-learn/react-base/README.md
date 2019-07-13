## react
  "react": "^16.8.6",
  "react-dom": "^16.8.6"

  react: 负责ui，用户看到的，规定了组件是怎么写的

  react-dom：负责将组件渲染到浏览器上的
  react-native:负责将组件渲染到手机上的

````js
  ReactDOM.render(<App />, document.getElementById('root'));
  //把APP挂载到root节点上，只在入口文件上看见，仅此一次
````
## jsx
  js + html
  vue template 

  哪个地方放什么东西

## 组件
1. function App() {
    return 
  } 
  这种组件的定义方式叫function components,return 是用户能看见的东西
2. class component
  
