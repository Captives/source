import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Worker from './views/Worker.vue'
import ShareWorker from './views/ShareWorker.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },   {
      path: '/worker',
      name: 'worker',
      component: Worker
    }, {
      path: '/shareworker',
      name: 'shareworker',
      component: ShareWorker
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
