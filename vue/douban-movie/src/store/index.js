import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'js-cookie'
import createLogger from 'vuex/dist/logger'
import {
  getSearch,
  saveSearch,
  deleteSearch,
  clearSearch
} from '@/common/js/cache.js'

Vue.use(Vuex)   //这里没有vue实例，所以需要vue.use一下 

const COOKIE_NAME = 'movie_trailer_user'
const getCookieUser = () => {
  return Cookie.get(COOKIE_NAME)
    ? JSON.parse(Cookie.get(COOKIE_NAME))
    : null
}
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  state:{
    searchHistory: getSearch()
  },
  actions:{
    
  },
  mutations:{
    saveSearchHistory(state, query){
      state.searchHistory = saveSearch(query);
    }
  },
  plugins: debug ? [createLogger()] : []
})
