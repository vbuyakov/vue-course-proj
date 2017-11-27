<template>
    <div>
        <h3>Редактирование пользователя #{{id}}</h3>
        <user-form v-bind:result="resultMessage" v-model="user">
          <div slot="actions">
            <button type="button" class="btn btn-success" v-on:click="saveUser">
                Сохранить
            </button>
          </div>
        </user-form>
    </div>

</template>

<script>
  import axios from 'axios'
  import UserForm from './UserForm.vue'

  import cfg from '@/config.js'

  export default {
    components: {UserForm},
    name: 'UserEdit',
    props: {
      id: {
        required: true
      }
    },
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
      saveUser: function () {
        axios.put(this.url, this.user).then(
          () => {
            this.$store.commit('alert', {'type': 'success', 'msg': 'Пользователь успешно сохранен'})
          },
          () => {
            this.$store.commit('alert', {'type': 'error', 'msg': 'При сохранении произошла ошибка'})
          })
      }
    }
  }
</script>