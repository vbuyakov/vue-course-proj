<template>
    <div>
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
                       <image-uploader v-model="user.picture" :clientId="clientId" id="picture"></image-uploader>
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
        </form>
        <slot name="actions"></slot>
    </div>
</template>

<script>
  import cfg from '@/config.js'
  export default {
    components: {
      ImageUploader: () => import('./imageUploader.vue'),
      CheckboxPro: () => import('./checkboxPro.vue'),
      MediumEditor: () => import('./mediumEditor.vue'),
      DatePicker: () => import('./datepicker.vue')
    },
    name: 'UserForm',
    props: {
      'user': {
        type: Object,
        required: true
      },
      'result': {}
    },
    model: {
      prop: 'user'
    },
    data () {
      return {
        isResultAlert: false
      }
    },
    computed: {
      isLoaded: function () {
        return (this.user.hasOwnProperty('id') && this.user.id != null)
      },
      clientId: function () {
        return cfg.IMGUR.clientId
      }
    }
  }
</script>