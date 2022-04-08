import Vue from 'vue'
import App from './App.vue'

import WindowEvents from '../../main'
Vue.use(WindowEvents)
// Vue.use(WindowEvents, {
//   events: ['scroll', 'resize']
// })

new Vue({
  render: h => h(App),
}).$mount('#app')
