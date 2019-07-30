// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'mand-mobile/lib/mand-mobile.css'
import mandMobile from 'mand-mobile'
import store from './store/index';
import AMap from 'vue-amap';


// import axios from 'axios';
// Vue.prototype.$http = axios;
Vue.use(AMap);

Vue.use(mandMobile)
import requestPlugin from './request/http.js';
Vue.use(requestPlugin);
Vue.config.productionTip = false

AMap.initAMapApiLoader({
  //高德地图的key值
  
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// 使用第三方的包才需要Vue.use
// 而属于自身的只需要在实例中声明就可以，如store和router
