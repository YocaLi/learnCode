import Vue from 'vue'
import Router from 'vue-router'
import tuijian from '@/page/tuijian.vue'
import zhibo from '@/page/zhibo.vue'
import nba from '@/page/nba.vue'
import cba from '@/page/cba.vue'
import zhongchao from '@/page/zhongchao.vue'
import yingchao from '@/page/yingchao.vue'
import xijia from '@/page/xijia.vue'
import yijia from '@/page/yijia.vue'
import dejia from '@/page/dejia.vue'
import ouguan from '@/page/ouguan.vue'
import fajia from '@/page/fajia.vue'
import yaguan from '@/page/yaguan.vue'

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
    },
    {
      path: '/nba',
      name: 'nba',
      component: nba
    },
    {
      path: '/cba',
      name: 'cba',
      component: cba
    },
    {
      path: '/zhongchao',
      name: 'zhongchao',
      component: zhongchao
    },
    {
      path: '/yingchao',
      name: 'yingchao',
      component: yingchao
    },
    {
      path: '/xijia',
      name: 'xijia',
      component: xijia
    },
    {
      path: '/yijia',
      name: 'yijia',
      component: yijia
    },
    {
      path: '/dejia',
      name: 'dejia',
      component: dejia
    },
    {
      path: '/ouguan',
      name: 'ouguan',
      component: ouguan
    },
    {
      path: '/fajia',
      name: 'fajia',
      component: fajia
    },
    {
      path: '/yaguan',
      name: 'yaguan',
      component: yaguan
    }
  ]
})
