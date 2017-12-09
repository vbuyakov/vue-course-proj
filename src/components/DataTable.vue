<template>
    <div>
        <div class="row">
            <items-on-page class="pull-left m-5-right" v-model="pagesize"></items-on-page>
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
                <th>Birth</th>
                <th>Email</th>
                <th>Active</th>
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
                <td>{{user.bithday}}</td>
                <td>{{user.email}}</td>
                <td>{{user.isActive ? 'Yes' : 'No'}}</td>
                <td>
                    <router-link :to="{'name':'UserEdit', 'params': {'id': user.id} }">
                        <a title="Редактировать" class="m-5-right"><i class="fa fa-edit"></i> </a>
                    </router-link>
                    <a title="Удалить" v-on:click="deleteUser(user.id)"><i class="fa fa-trash"></i> </a>
                </td>
            </tr>
            </tbody>
        </table>
        <paginator v-bind:pages="totalPages" v-model="page"></paginator>
        <items-on-page class="pull-left m-5-right" v-model="pagesize"></items-on-page>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    components: {
      Paginator: () => import('./paginator.vue'),
      ItemsOnPage: () => import('./ItemsOnPage.vue')
    },
    name: 'DataTable',
    data: function () {
      return {
        pagesize: 5,
        page: 1,
        users: [],
        totalCount: 0
      }
    },
    props: {
      apiUrl: {
        required: true,
        type: String
      }
    },
    computed: {
      totalPages: function () {
        return Math.ceil(this.totalCount / this.pagesize)
      },
      getUrl: function () {
        return `${this.apiUrl}?_page=${this.page}&_limit=${this.pagesize}`
      }
    },
    methods: {
      getUsers: function () {
        axios.get(this.getUrl).then((res) => {
          this.users = res.data
          this.totalCount = res.headers['x-total-count']
        })
      },
      deleteUser: function (id) {
        var confirmation = confirm(`Действительно хотите удалить пользователя с ID: ${id}?`)
        if (!confirmation) return
        let deleteUrl = `${this.apiUrl}/${id}`
        axios.delete(deleteUrl).then((res) => {
          this.$store.commit('appMessaging', {'type': 'success', 'msg': 'Пользователь успешно удалён'})
          if ((this.totalCount - 1) / this.pagesize <= this.page - 1) {
            this.page--
          } else this.getUsers()
        })
      }
    },
    watch: {
      pagesize: function () {
        if (this.page !== 1) this.page = 1
        else this.getUsers()
      },
      page: function () {
        this.getUsers()
      }
    },
    mounted: function () {
      this.getUsers()
    }
  }
</script>