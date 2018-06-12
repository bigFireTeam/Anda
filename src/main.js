// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Rem from './assets/js/responsive'

import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Rem.remRefontsize(window, document)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>'
})
