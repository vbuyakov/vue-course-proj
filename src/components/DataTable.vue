<template>
    <div>
        <div class="row">
            <items-on-page class="pull-left m-5-right" v-on:change="setPageSize"></items-on-page>
            <div class="pull-left m-5-left">Всего пользователей: <b>{{totalCount}}</b></div>
        </div>

        <table class="table table-bordered table-hover">
            <thead>
            <tr>
                <th>#Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Company</th>
                <th>Role</th>
                <th>Phone</th>
                <th>Email</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users">
                <td>#{{user.id}}</td>
                <td>{{user.firstName}}</td>
                <td>{{user.lastName}}</td>
                <td>{{user.age}}</td>
                <td>{{user.company}}</td>
                <td>{{user.accessLevel}}</td>
                <td>{{user.phone}}</td>
                <td>{{user.email}}</td>
                <td>
                    <router-link :to="{'name':'UserEdit', 'params': {'id': user.id} }">
                        <a title="Редактировать" class="m-5-right"><i class="fa fa-edit"></i> </a>
                    </router-link>
                    <a title="Удалить" v-on:click="deleteUser(user.id)"><i class="fa fa-trash"></i> </a>
                </td>
            </tr>
            </tbody>
        </table>
        <paginator v-bind:pages="totalPages" v-on:change="setPage"></paginator>
    </div>
</template>

<script>
  import axios from 'axios'
  import ItemsOnPage from './ItemsOnPage.vue'
  import Paginator from './paginator.vue'

  export default {
    components: {
      Paginator,
      ItemsOnPage
    },
    name: 'DataTable',
    data: function () {
      return {
        url: 'http://localhost:3000/users/',
        pagesize: 5,
        page: 1,
        users: null,
        totalCount: null
      }
    },
    computed: {
      totalPages: function () {
        return Math.ceil(this.totalCount / this.pagesize)
      }
    },
    methods: {
      getUsers: function () {
        let getUrl = `${this.url}?_page=${this.page}&_limit=${this.pagesize}`
        axios.get(getUrl).then((res) => {
          this.users = res.data
          this.totalCount = res.headers['x-total-count']
        })
      },
      deleteUser: function (id) {
        if (confirm(`Действительно хотите удалить пользователя с ID: ${id}?`)) {
          let deleteUrl = `${this.url}/${id}`
          axios.delete(deleteUrl).then((res) => {
            this.getUsers()
          })
        }
      },
      setPageSize: function (size) {
        this.page = 1
        this.pagesize = size
        this.getUsers()
      },
      setPage: function (page) {
        this.page = page
        this.getUsers()
      }
    },
    mounted: function () {
      this.getUsers()
    }
  }
</script>

<style>
</style>