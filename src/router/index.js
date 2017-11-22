import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

Vue.use(Router)

const UsersList = resolve => {
  require.ensure([], () => {
    resolve(require('@/components/UsersList.vue'))
  })
}

const UserAdd = resolve => {
  require.ensure([], () => {
    resolve(require('@/components/UserAdd.vue'))
  })
}

const UserEdit = resolve => {
  require.ensure([], () => {
    resolve(require('@/components/UserEdit.vue'))
  })
}

export default new Router({
  mode: 'history',
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
