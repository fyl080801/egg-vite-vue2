import Vue from 'vue'
import App from './App.vue'
import Router from './router'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

new Vue({
  router: Router,
  render: (h) => h(App),
}).$mount('#app')
