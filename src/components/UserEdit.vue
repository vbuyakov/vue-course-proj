<template>
    <div>
        <h3>Редактирование пользователя #{{id}}</h3>
        <user-form v-bind:result="resultMessage" v-model="user"></user-form>
    </div>

</template>

<script>
  import axios from 'axios'
  import UserForm from './UserForm.vue'

  import API_URL from '@/config.js'

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
        return API_URL + '/users/'
      }
    },
    watch: {
      user: function (newVal) {
        let saveUrl = `${this.url}${this.id}`
        axios.put(saveUrl, newVal).then(
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