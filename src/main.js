// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import vueDragDrag from './vue-dragdrag/vue-dragdrag.js'
console.log(vueDragDrag)
Vue.use(vueDragDrag)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
