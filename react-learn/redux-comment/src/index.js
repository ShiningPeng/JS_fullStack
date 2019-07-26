import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';//有connect的App，而不是component里的App
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
const store = createStore(reducer);

ReactDOM.render(
  //**** 提供数据的地方
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
