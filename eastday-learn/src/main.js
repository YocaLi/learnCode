// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Sjsonp from './assets/js/config'
import 'lib-flexible'
import VueAweSomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'


Vue.prototype.$http = Sjsonp
Vue.config.productionTip = false
Vue.config.debug = true // 开debug模式
Vue.use(VueAweSomeSwiper)

/* eslint-disable no-new */
new Vue({
  mode: 'history',
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
