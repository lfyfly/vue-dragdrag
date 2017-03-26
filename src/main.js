// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import vue2Draggable from './vue2-draggable/vue2-draggable.js'
console.log(vue2Draggable)
Vue.use(vue2Draggable)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
