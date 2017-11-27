<template>
    <div>
        <h3>Создать нового пользователя</h3>
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
        <div v-else>
            <user-form v-bind:result="resultMessage"  v-model="user">
                <div slot="actions">
                    <button type="button" class="btn btn-success" v-on:click="saveUser">
                        Создать пользователя
                    </button>
                </div>
            </user-form>
        </div>

    </div>
</template>

<script>
  import axios from 'axios'
  import UserForm from './UserForm.vue'
  import cfg from '@/config.js'

  const TUser = {
    id: '',
    isActive: false,
    balance: 0,
    picture: 'http://placehold.it/32x32',
    age: '',
    accessLevel: 'USER',
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    about: '',
    bithday: ''
  }

  export default {
    name: 'UserAdd',
    components: {UserForm},
    data () {
      return {
        resultMessage: null,
        isUserCreated: false,
        user: TUser
      }
    },
    computed: {
      url: function () {
        return cfg.API_URL + '/users'
      }
    },
    methods: {
      createNew: function () {
        this.user = TUser
        this.isUserCreated = false
      },
      saveUser: function () {
        axios.post(this.url, this.user).then(
          () => {
            this.isUserCreated = true
            this.$store.commit('alert', {'type': 'success', 'msg': 'Пользователь создан'})
          },
          () => {
            this.$store.commit('alert', {'type': 'error', 'msg': 'При создании пользователя произошла ошибка'})
          })
      }
    }
  }
</script>