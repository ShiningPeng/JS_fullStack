import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ConcurrentMode from './concurrent/index'
import Index from './lifeCycle-react15/index';
// hooks是对function组件的增强

function App() {
  const [ parentCount, setParentCount] = useState(0);
  // 第一个参数是默认值，第二个是改变值得方法
  return (
    <div>
      {/* <ConcurrentMode /> */}
      <button onClick={() => setParentCount(parentCount + 1)}>setParentCount</button>
      <Index parentCount = {parentCount}  />
    </div>
  );
}

export default App;
