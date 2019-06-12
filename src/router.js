import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "Detail" */ './views/Home')
    },
    {
      path: '/detail',
      name: 'Detail',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Detail" */ './views/Detail')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "About" */ './views/About')
    }
  ]
})
