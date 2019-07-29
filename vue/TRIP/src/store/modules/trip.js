import * as types from '../mutations-types';// * as types:全部引入过来并取名为types
export default {
  state: {
    user: null,
    userDistance: null
  },
  getters:{
    //数据取出,要用的话，在外面mapGetters取到
    user:state => state.user,
    userDistance:state => state.userDistance
  },
  mutations:{
    [types.SET_USER](state, data){
      state.user = data;
    },
    [types.SET_USER_DATA](state, data){
      state.user = data;
    }
  },
  actions:{
    //actions通过commit来提交mutations里面的方法
    setUser(store, data){
      store.commit(types.SET_USER, data)
    },
    setUserData(){
        
    }
  }
}