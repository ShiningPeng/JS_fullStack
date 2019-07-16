import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import index from './reducer/index';
import { Provider } from 'react-redux';
import Count from './App';
//Provider可以把redux的数据让外面拿到 *******
const store = createStore(index);

ReactDOM.render(
<Provider store={store}>
  <Count />
</Provider>, document.getElementById('root'));
// store.subscribe(() => {
//   ReactDOM.render(<Count />, document.getElementById('root'));
// })

