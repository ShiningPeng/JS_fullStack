const { createStore } = require('redux');
/**
 * tab切换
 * [{tabName:'推荐', selected:true},
 * {tabName:'关注', selected:false}]
 */

function reducer(state = [], action) {
  console.log(action);
  switch (action.type) {
    case 'ADD_TABNAME':
      const { tabName, selected } = action;
      //浅拷贝
      //state.push() 不会影响原来的state
      return [...state, {
        tabName,
        selected
      }];
    case 'TOGGLE_SELECTED':
      const { index } = action;
      return state.map((tab, i) => {
        if (index === i) {
          return {...tab, selected: true}
        }
        return {...tab, selected: false}
      })
    default:
      return state;
  }

}
//  当要改变数据的时候，就要设计 type字段 和 在reducer里面做判断
const store = createStore(reducer);
store.subscribe(() => {
  console.log('store', store.getState())
})
store.dispatch({ type: 'ADD_TABNAME', tabName: '推荐', selected: false })
store.dispatch({ type: 'ADD_TABNAME', tabName: '关注', selected: false })
//模拟用户点了第0项
store.dispatch({ type: 'TOGGLE_SELECTED', index: 0 })

//dispatch内部是自己做初始化store.dispatch({type:'@@INIT'})

