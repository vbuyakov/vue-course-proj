<template>
    <div>
        <h3>Создать нового пользователя</h3>
        <div v-if="!isUserCreated">
            <user-form v-bind:result="resultMessage" v-on:saveUser="saveUser"></user-form>
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

  export default {
    name: 'UserAdd',
    components: {UserForm},
    data () {
      return {
        url: 'http://localhost:3000/users/',
        resultMessage: null,
        isUserCreated: false
      }
    },
    methods: {
      saveUser: function (user) {
        let saveUrl = `${this.url}`
        axios.post(saveUrl, user).then(
          () => {
            this.isUserCreated = true
          },
          () => {
            this.resultMessage = {'type': 'error', 'msg': 'При создании пользователя произошла ошибка'}
          })
      },
      createNew: function () {
        this.isUserCreated = false
      }
    }

  }
</script>

<style scoped>
</style>