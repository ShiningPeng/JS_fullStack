import React, { Component } from 'react';
import Header from './Header.js';
import Search from './Search.js';
import Results from './Results.js';
class Main extends Component {
  constructor (){
    super()
    this.state = {
      beers:[],
      loading:true
    }
  }
  componentDidMount(){
    //生命周期函数，组件已经挂载上去了
    const params = this.props.match.params || {};
    const searchTerm = params.searchTerm || undefined;
    this.loadBeers(searchTerm);

  }
  loadBeers(searchTerm = "hops") {
    fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
    })
  }
  state = {  }
  render() { 
    
    return ( 
      <div className="wrapper">
        <Header siteName="Beer me!"/>
        <Search />
        <Results beers={this.state.beers} loading={this.state.loading} />

      </div>
     );
  }
}
 
export default Main;