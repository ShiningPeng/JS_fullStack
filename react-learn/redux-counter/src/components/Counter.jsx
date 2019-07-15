import React, { Component } from 'react';
import {connect} from 'react-redux';
class Counter extends Component {
  state = {  }
  render() { 
    return ( 
      <p>
        Clicked:{this.props.count}times
      </p>
     );
  }
}
 
// 1. map共享状态
// 2. 作为参数传给组件
// 参数是一个函数
const mapStateToProps = (state) =>{
  // connect会找到这个参数，并且把state交给connect，
  return {
    count:state.count
  }
}
export default connect(mapStateToProps)(Counter);