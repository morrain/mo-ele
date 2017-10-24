// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'

import 'normalize.css' //引入标准样式，相当于样式重置

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import './assets/mo-fonts.css'

import App from './App'
import router from './router'
import axios from 'axios'

Vue.use(VueMaterial)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

//引入 element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
