const { createStore, combineReducers } = require('redux');  //创建一份应用的状态
// action.type 是一个常量决定了这次ditpatch要干什么，type不能重复
//reducer可以收到action的信息，可以做判断
const add = {
  type: 'INCREMENT'
}
const reduce = {
  type: 'DECREMENT'
}
//添加 ADD_FILM
//type + payload(type之外的字段)
function filmReducer(state = [], action) {
  switch (action.type){
    case 'ADD_FILM':
      return [...state, action.film];
    default:
      return state;
  }
}
function reducer(state, action) {
  // console.log('reducer>>',action)
  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return 0;
  }
}
const index = combineReducers({
  count:reducer,
  films:filmReducer
})
//createStore接受一个reducer，只接受reducers
const store = createStore(index);
store.subscribe(() => {
  console.log(store.getState());
}); //订阅，数据发生改变的时候即每dispatch一次，触发一次回调
store.dispatch(add);
store.dispatch(add);
store.dispatch(reduce);
store.dispatch({//type必须有，其他字段可以自行添加
  type:'ADD_FILM',
  a:1,
  b:2,
  id:0,
  film:{name:'狮子王'}
})
