// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import http from './config/http'
import cookie from './config/cookie'
import FastClick from 'fastclick'
import Navigation from 'vue-navigation'
import VueLazyload from 'vue-lazyload'
import 'lib-flexible/flexible.js'
import './plugins/mint-ui'
import './assets/css/common.scss'
import {homePage, loginLose, wbBack} from './plugins/wbApp'

FastClick.attach(document.body)
Vue.prototype.$cookie = cookie
Vue.prototype.http = http
Vue.prototype.back = wbBack
Vue.use(Navigation, {router, store})
Vue.use(VueLazyload, {
  error: '/static/img/error.jpg',
  loading: '/static/img/loading.gif'
})
Vue.config.productionTip = false

window.vm = new Vue({
  el: '#app',
  data: {
    eventHub: new Vue()
  },
  store,
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})

// 路由守卫
router.beforeEach((to, from, next) => {
  homePage(to)
  if (to.matched.some(record => record.meta.isLogin)) {
    if (cookie.get('ssotoken') === null) {
      loginLose()
    } else {
      next()
    }
  } else {
    next()
  }
})
