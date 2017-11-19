<template>
    <div>
        <div v-if="isResultAlert"
             class="alert" v-bind:class="alertStyle"
             role="alert">
            {{ result.msg }}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close" v-on:click="hideAlert"><span
                    aria-hidden="true">×</span></button>
        </div>
        <form class="form-horizontal" v-if="isLoaded">
            <div class="form-group">
                <label class="col-sm-2 control-label" for="firstName">First Name</label>
                <div class="col-sm-10"><input class="form-control" id="firstName" v-model="user.firstName"
                                              placeholder="First Name"></div>
            </div>

            <div class="form-group">
                <label class="col-sm-2 control-label" for="firstName">Last Name</label>
                <div class="col-sm-10"><input class="form-control" id="lastName" v-model="user.lastName"
                                              placeholder="Last Name"></div>
            </div>

            <div>
                <div class="form-group">
                    <label class="col-sm-2 control-label" for="picture">Avatar</label>
                    <div class="col-sm-10">
                        <p class="text-left">

                            <img :src="user.picture" class="img-thumbnail">
                        </p>
                        <input type="text" class="form-control" id="picture" v-model="user.picture"
                               placeholder="picture">
                        <input type="file" class="hidden" ref="image" @change="upload">
                        <button v-if="!isUploading" class="btn btn-sm pull-left" type="button" @click="selectNewImage">
                            Выбрать новую картинку
                        </button>
                        <div v-else class="pull-left">Загружется <i class="fa fa fa-spinner fa-spin"></i></div>


                    </div>
                </div>
            </div>

            <div class="form-group">
                <label class="col-sm-2 control-label" for="age">Age</label>
                <div class="col-sm-10"><input class="form-control" id="age" v-model="user.age" placeholder="age"></div>
            </div>

            <div class="form-group">
                <label class="col-sm-2 control-label" for="company">Company</label>
                <div class="col-sm-10"><input class="form-control" id="company" v-model="user.company"
                                              placeholder="company"></div>
            </div>

            <div class="form-group">
                <label class="col-sm-2 control-label" for="accessLevel">Role</label>
                <div class="col-sm-10"><input class="form-control" id="accessLevel" v-model="user.accessLevel"
                                              placeholder="Role"></div>
            </div>

            <div class="form-group">
                <label class="col-sm-2 control-label" for="phone">Phone</label>
                <div class="col-sm-10"><input class="form-control" id="phone" v-model="user.phone" placeholder="Phone">
                </div>
            </div>

            <div class="form-group">
                <label class="col-sm-2 control-label" for="registered">Дата рождения </label>
                <div class="col-sm-10">
                    <date-picker id="registered" v-model="user.bithday"></date-picker>
                </div>

            </div>


            <div class="form-group">
                <label class="col-sm-2 control-label" for="email">Email</label>
                <div class="col-sm-10"><input class="form-control" id="email" v-model="user.email" placeholder="Email">
                </div>
            </div>

            <div class="form-group">
                <label class="col-sm-2 control-label" for="email">Активность</label>
                <div class="col-sm-10">
                    <checkbox-pro v-model="user.isActive"></checkbox-pro>
                </div>
            </div>


            <div class="form-group">
                <label class="col-sm-2 control-label" for="email">О пользователе</label>
                <div class="col-sm-10">
                    <medium-editor v-model="user.about"></medium-editor>
                </div>
            </div>

            <button type="button" class="btn btn-success" v-on:click="submitForm">
                Сохранить
            </button>
        </form>
    </div>
</template>

<script>
  import cfg from '@/config.js'
  import axios from 'axios'
  import DatePicker from './datepicker.vue'
  import CheckboxPro from './checkboxPro.vue'
  import MediumEditor from './mediumEditor.vue'

  export default {
    components: {
      MediumEditor,
      CheckboxPro,
      DatePicker
    },
    name: 'UserForm',
    props: {
      'user': {
        default: {}
      },
      'result': {}
    },
    data () {
      return {
        isResultAlert: false,
        isUploading: false
      }
    },
    computed: {
      alertStyle: function () {
        return 'alert-' + (this.result.type === 'error' ? 'danger' : this.result.type)
      },
      isLoaded: function () {
        if (this.user.hasOwnProperty('id') && this.user.id != null) {
          return true
        }
        return false
      }
    },
    methods: {
      submitForm: function () {
        this.$emit('save', this.user)
      },
      hideAlert: function () {
        this.isResultAlert = false
      },
      selectNewImage: function () {
        this.$refs.image.click()
      },
      upload: function () {
        this.isUploading = true
        const url = 'https://api.imgur.com/3/image'
        const data = new FormData()
        data.append('image', this.$refs.image.files[0])

        const config = {
          headers: {
            'Authorization': `Client-ID ${cfg.IMGUR.clientId}`
          }
        }
        axios.post(url, data, config).then(
          (res) => {
            this.isUploading = false
            this.user['picture'] = res.data.data.link
            this.$refs.image.value = ''
          }
        )
      }
    },
    watch: {
      result: function (newResult) {
        this.isResultAlert = !!newResult
        setTimeout(() => { this.isResultAlert = false }, 2500)
      }
    }
  }
</script>

<style scoped>
</style>