const state = {
  items:[]
}
const getters = {}
const actions = {
  //这里的第一个参数对象，可以读取state，但是不能修改
  addProductToCart({state, commit}, product){
    if(product.inventory > 0){
      // const 
      // - 把商品参加进inventory 要什么逻辑
      // - 检查下items里面有没有
      // - 有 +1
      const cartItem = state.items.find(item => item.id === product.id)
      if(!cartItem){
        commit('pushProductToCart',{id: product.id})
      }
    }else{
      commit('incrementItemQuantity', cartItem);
    }
  }
}
const mutations = {
  pushProductToCart(state, {id}){
    state.items.push({
      id,quantity:1
    })
  },
  incrementItemQuantity(state, {id}){
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++;
  }

}
export default {
  namespaced:true,
  state,
  getters,
  actions,
  mutations
}