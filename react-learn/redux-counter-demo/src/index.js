import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
function reducer(state, action) {
  console.log('reducer->>>>', action);
  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return 0;
  }
}
function filmReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_FILM':
      return [...state, action.film];
    default:
      return state;
  }
}
const index = combineReducers({
  count: reducer,
  films: filmReducer
})
const store = createStore(index);

class Count extends Component {
  handleDE = () => {
    store.dispatch({
      type: 'DECREMENT'
    })
  }
  handleIN = () => {
    store.dispatch({
      type: 'INCREMENT'
    })
  }
  handleAddFilm = () => {
    store.dispatch({
      type: 'ADD_FILM',
      film: { name: '荒野猎人' }
    })
  }
  state = {}
  render() {
    return (
      <div>
        {/* combineReducer之后index是一个对象，取的时候需要.来获得 */}
        count:{store.getState().count};
        <button onClick={this.handleIN}>+</button>
        <button onClick={this.handleDE}>-</button>
        <button onClick={this.handleAddFilm}>添加电影</button>
        {
          //map函数需要return
          store.getState().films.map((film, i) => {
            return (
              <li key={i}>{film.name}</li>
            )
          })
        }
      </div>
    );
  }
}


ReactDOM.render(<Count />, document.getElementById('root'));
store.subscribe(() => {
  ReactDOM.render(<Count />, document.getElementById('root'));
})

