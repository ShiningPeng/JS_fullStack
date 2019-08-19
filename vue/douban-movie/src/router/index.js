import Vue from 'vue'
import Router from 'vue-router'
const Recommend  = () => import('@/views/Recommend')
const Movie  = () => import('@/views/Movie')
const Search  = () => import('@/views/Search')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/recommend'
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/movie/:id',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
