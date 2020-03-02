import Vue from 'vue'
import Router from 'vue-router'

const Demo = () => import('@/components/Demo')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: Demo
    }
  ]
})
