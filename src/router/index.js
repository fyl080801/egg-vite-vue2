import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const createRouter = () => {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/home',
        component: () => import('../views/Home.vue'),
      },
      {
        path: '/about',
        component: () => import('../views/About.vue'),
      },
      {
        path: '*',
        redirect: '/home',
      },
    ],
  })
}

export default createRouter()
