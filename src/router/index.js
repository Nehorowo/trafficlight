import Vue from 'vue'
import Router from 'vue-router'
import colors from '@/components/colors'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/red',
      component: colors
    },
    {
      path: '/yellow',
      component: colors
    },
    {
      path: '/green',
      component: colors
    }
  ]
})
