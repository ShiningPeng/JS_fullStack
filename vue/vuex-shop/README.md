#   技能思路
- 购物车
Goods > GoodsItem
共享数据  库存 -> 购物车
- 组件让我们从容的进行页面划分
- vuex中 data（组件私有） 不适合放共享数据
  props  父子组件传值，但是 event bus 不如 vuex
  computed 进行数据从中央到地方的对接点
- 
  store module(products.all)  []
  mapState({products: state => state.products.all}) 可以接受数组和对象

  all <-   mutation <-action axios请求 (从后端api拿到数据) 
  modules state.products.all
  dispatch -> action ->api->mutations->state ->mvvm -> 界面  vuex开发套路

  methods => mapActions