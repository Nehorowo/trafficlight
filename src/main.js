import Vue from 'vue'
import App from './App'
import router from './router'
import colors from './components/colors'
import timer from './components/timer'

Vue.config.productionTip = false
Vue.component('colors', colors)
Vue.component('timer', timer)

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(App),
  router
})
