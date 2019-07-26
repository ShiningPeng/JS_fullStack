/**
 * [
 * {userName:'', content:''}
 * ]
 */
//  type字段
export default function(state = [], action){
  switch(action.type) {
    case 'ADD_COMMENT':
      const {userName, content} = action;
      return [{userName, content }, ...state,];
    default:
      return state;
  }
}