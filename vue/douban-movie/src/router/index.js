import Vue from 'vue'
import Router from 'vue-router'
const Recommend  = () => import('@/views/Recommend')
const Movie  = () => import('@/views/Movie')

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
    }
  ]
})
