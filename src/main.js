import Vue from 'vue'
import App from './App'

var VueResource = require('vue-resource');
Vue.use(VueResource);
// console.log(VueResource)
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
