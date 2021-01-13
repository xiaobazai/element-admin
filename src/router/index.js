import Vue from 'vue'
import VueRouter from 'vue-router'
import RegisterIndex from '@/views/register/Index.vue'
import loginIndex from '@/views/login/Index.vue'
import test from '@/views/login/test.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/register',
    name: 'RegisterIndexPage',
    component: RegisterIndex
  },
  {
    path: '/login',
    name: 'loginIndexPage',
    component: loginIndex
  },
  {
    path: '/test',
    name: 'testPage',
    component: test
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({

  routes
})

export default router
