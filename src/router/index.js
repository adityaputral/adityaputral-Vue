import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import NotFound from '@/view/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
