import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

Vue.use(Router)

const UsersList = () => import('@/components/UsersList.vue')
const UserAdd = () => import('@/components/UserAdd.vue')
const UserEdit = () => import('@/components/UserEdit.vue')

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/users',
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
