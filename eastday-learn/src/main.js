// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Sjsonp from './assets/js/config'
import 'lib-flexible'

Vue.prototype.$http = Sjsonp
Vue.config.productionTip = false
Vue.config.debug = true // 开区debug模式
/* eslint-disable no-new */
new Vue({
  el: '#app',
  mode: 'history',
  router,
  components: { App },
  template: '<App/>'
})
