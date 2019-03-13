import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import LoginPage from '@/components/LoginPage'
import MovieIndex from '@/components/MovieIndexPage'
import MovieShowPage from '@/components/MovieShowPage'

import Axios from 'axios'
Vue.prototype.$http = Axios

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/LoginPage',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/Movie',
      name: 'MovieIndexPage',
      component: MovieIndex
    },
    {
      path: '/Movie/:id',
      name: 'MovieShowPage',
      component: MovieShowPage
    }
  ]
})
