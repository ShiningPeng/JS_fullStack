import React from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';//将
import './App.css';
import App from './component/App';

// 把state和dispatch 放在形参中进行接收
//mapStateToProps
const a = (state) => {
  //组件把return的对象当做props进行接收，
  // 提供这个函数过滤一下
  return {
    commentList: state
  }
}
//mapDispatchToProps
const b = (dispatch) => {
  return {
    addComment: (userName, content) => {
      dispatch({
        type: 'ADD_COMMENT',
        userName,
        content
      })
    }
  }
}
export default connect(a, b)(App);
