import Vue from 'vue'
import Router from 'vue-router'
import UsersList from '@/components/UsersList'
import UserAdd from '@/components/UserAdd'
import UserEdit from '@/components/UserEdit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'UsersList',
      component: UsersList
    },
    {
      path: '/user/add',
      name: 'UserAdd',
      component: UserAdd
    },
    {
      path: '/user/:id',
      name: 'UserEdit',
      component: UserEdit,
      props: true
    }
  ]
})
