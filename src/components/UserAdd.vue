<template>
    <div>
        <h3>Создать нового пользователя</h3>
        <div v-if="!isUserCreated">
            <user-form v-bind:result="resultMessage" v-model="user"></user-form>
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
  import API_URL from '@/config.js'

  export default {
    name: 'UserAdd',
    components: {UserForm},
    data () {
      return {
        resultMessage: null,
        isUserCreated: false,
        user: {}
      }
    },
    computed: {
      url: function () {
        return API_URL + '/users'
      }
    },
    methods: {
      createNew: function () {
        this.isUserCreated = false
      }
    },
    watch: {
      user: function (newVal) {
        let saveUrl = `${this.url}`
        axios.post(saveUrl, newVal).then(
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