import React, { Component } from 'react';
/**
 * 第一次挂载的时候
 * 更新：
 */
class Index extends Component {
  state = { 
    count:0
   }
   handleCountAdd = () => {
     let { count } = this.state;
     count++;
     this.setState({
       count
     })
   }
  // 挂载时就执行三个函数willMount,render和DidMount，挂载完成之后前面两个就不执行了，props或state发生改变，都需要更新，
  componentWillMount(){
    console.log('componentWillMount')
  }
  componentDidMount(){
    console.log('componentDidMount')
    // 在这里才可以或许到真实的dom结构，在willMount中的虚拟的dom
  }
  componentWillReceiveProps(prevProps, nextProps){
    console.log('componentWillReceiveProps');
  }
  componentWillUpdate(){
    console.log('componentWillUpdate')
  }
componentDidUpdate(){
  console.log('componentDidUpdate')
}
  render() { 
    const { parentCount } = this.props;
    return ( <div>
      parentCount:{parentCount}
      <button onClick={this.handleCountAdd}>handleCountAdd</button>
    </div> );
  }
}
 
export default Index;