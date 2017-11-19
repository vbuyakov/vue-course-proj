<template>
    <div>
        <h3>Создать нового пользователя</h3>
        <div v-if="!isUserCreated">
            <user-form v-bind:result="resultMessage"  v-bind:user="user" v-on:save="saveUser"></user-form>
        </div>

        <div v-if="isUserCreated">
            <div
                    class="alert alert-success"
                    role="alert">
                Пользователь успешно создан
            </div>
            <a class="btn btn-default" v-on:click="createNew">Создать ещё одного</a>
            <router-link :to="{'name' : 'UsersList'}">
                <a class="btn btn-default">Перейти к списку</a>
            </router-link>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import UserForm from './UserForm.vue'
  import cfg from '@/config.js'

  export default {
    name: 'UserAdd',
    components: {UserForm},
    data () {
      return {
        resultMessage: null,
        isUserCreated: false,
        user: {
          'bithday': ''
        }
      }
    },
    computed: {
      url: function () {
        return cfg.API_URL + '/users'
      }
    },
    methods: {
      createNew: function () {
        this.user = {}
        this.isUserCreated = false
      },
      saveUser: function (newVal) {
        axios.post(this.url, newVal).then(
          () => {
            this.isUserCreated = true
          },
          () => {
            this.resultMessage = {'type': 'error', 'msg': 'При создании пользователя произошла ошибка'}
          })
      }
    }
  }
</script>

<style scoped>
</style>