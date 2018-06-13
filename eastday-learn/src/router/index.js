import Vue from 'vue'
import Router from 'vue-router'
import tuijian from '@/page/tuijian.vue'
import zhibo from '@/page/zhibo.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/tuijian'
    },
    {
      path: '/tuijian',
      name: 'tuijian',
      component: tuijian
    },
    {
      path: '/zhibo',
      name: 'zhibo',
      component: zhibo
    }
  ]
})
