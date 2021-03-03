import Vue from 'vue'
import App from './App.vue'
import Router from './router'

new Vue({
  router: Router,
  render: (h) => h(App),
}).$mount('#app')
