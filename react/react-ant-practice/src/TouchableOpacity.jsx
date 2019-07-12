import React, { Component } from 'react';
import './btn.css'
class TouchableOpacity extends Component {
  state = { 
    active: false
   }
  touchStart = () => {
    this.setState({
      active: true
    })
  }
  touchEnd = () => {
    this.setState({
      active: false
    })
  }
  render() {
    const { active } = this.state
    const Obj = {
      opacity: active ? 0.3 : 1
    }
    return ( 
      <div className="btn" style={Obj}  onTouchStart={this.touchStart} onTouchEnd={this.touchEnd}>
        {/* 将组件中间的内容取到 */}
        { this.props.children }
      </div>
     );
  }
}
 
export default TouchableOpacity;