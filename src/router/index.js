import Vue from 'vue'
import Router from 'vue-router'
import Pinboard from 'components/Pinboard'
import AddNode from 'components/AddNode'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Pinboard
    },
    {
      path: '/add',
      name: 'add',
      component: AddNode
    }
  ]
})
