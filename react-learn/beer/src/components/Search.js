import React from 'react';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


class Search extends React.Component {
  // contextType = React.createContext();
  // static contextTypes = {
  //   router: PropTypes.object.isRequired       /*** */
  // }
  // state = {}
  constructor(props, context) {
    super(props, context);
    // console.log(this.props.history);
    this.searchRef = React.createRef();
  }
  // es6中 可以将属性和方法并列排放
  searchRef = React.createRef();
  handleSubmit(e) {
    e.preventDefault(); //不会跳转表单
    const search = this.searchRef.current.value;  
    console.log(search);
    // this.context.router.history.push(`/search/${search}`); /**** */
    this.props.history.push(`/search/${search}`);

  }
  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref={this.searchRef} placeholder="Hoppy, Malt, Nanchang 8 ..." />
          <input type="submit" value="Search" />
        </form>
      </div>);
  }
}

export default withRouter(Search);