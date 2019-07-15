import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Layout from './page/Layout';
import 'antd/dist/antd.css';
//hashRouter 带#
//historyRouter  不带#  BrowserRouter 实现方式是通过 h5的History api

function App() {
  return (
   <Router>
     <Route path="/" component={Layout} />
   </Router>
      
  );
}

export default App;
