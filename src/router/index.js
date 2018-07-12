import Vue from 'vue'
import Router from 'vue-router'
import zhibo from '@/page/zhibo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/zhibo',
      name: 'zhibo',
      component: zhibo
    }
  ]
})
