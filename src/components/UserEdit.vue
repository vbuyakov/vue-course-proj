<template>
    <div>
        <h3>Редактирование пользователя #{{id}}</h3>
        <user-form v-bind:user="user" v-bind:result="resultMessage" v-on:saveUser="saveUser"></user-form>
    </div>

</template>

<script>
  import axios from 'axios'
  import UserForm from './UserForm.vue'

  export default {
    components: {UserForm},
    name: 'UserEdit',
    props: ['id'],
    data () {
      return {
        url: 'http://localhost:3000/users/',
        user: {},
        resultMessage: null
      }
    },
    methods: {
      saveUser: function (user) {
        let saveUrl = `${this.url}${this.id}`
        axios.put(saveUrl, user).then(
          () => {
            this.resultMessage = {'type': 'success', 'msg': 'Пользователь успешно сохранен'}
          },
          () => {
            this.resultMessage = {'type': 'error', 'msg': 'При сохранении произошла ошибка'}
          })
      }
    },
    mounted () {
      let getUrl = `${this.url}${this.id}`
      axios.get(getUrl).then((res) => {
        this.user = res.data
      })
    }
  }
</script>

<style scoped>
</style>