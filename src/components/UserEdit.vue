<template>
    <div>
        <h3>Редактирование пользователя #{{id}}</h3>
        <user-form v-bind:result="resultMessage" v-bind:user="user" v-on:save="saveUser"></user-form>
    </div>

</template>

<script>
  import axios from 'axios'
  import UserForm from './UserForm.vue'

  import cfg from '@/config.js'

  export default {
    components: {UserForm},
    name: 'UserEdit',
    props: ['id'],
    data () {
      return {
        user: {},
        resultMessage: null
      }
    },
    computed: {
      url: function () {
        return cfg.API_URL + '/users/' + this.id
      }
    },
    mounted () {
      axios.get(this.url).then((res) => {
        this.user = res.data
      })
    },
    methods: {
      saveUser: function (newVal) {
        axios.put(this.url, newVal).then(
          () => {
            this.resultMessage = {'type': 'success', 'msg': 'Пользователь успешно сохранен'}
          },
          () => {
            this.resultMessage = {'type': 'error', 'msg': 'При сохранении произошла ошибка'}
          })
      }
    }
  }
</script>

<style scoped>
</style>