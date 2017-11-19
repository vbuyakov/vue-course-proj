<template>
    <div>
        <div v-if="isResultAlert"
             class="alert" v-bind:class="alertStyle"
             role="alert">
            {{ result.msg }}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close" v-on:click="hideAlert"><span
                    aria-hidden="true">×</span></button>
        </div>
        <form class="form-horizontal">
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
                <label class="col-sm-2 control-label" for="email">Email</label>
                <div class="col-sm-10"><input class="form-control" id="email" v-model="user.email" placeholder="Email">
                </div>
            </div>

            <button type="button" class="btn btn-success" v-on:click="submitForm">
                Сохранить
            </button>
        </form>
    </div>
</template>

<script>
  export default {
    name: 'UserForm',
    props: ['value', 'result'],
    data () {
      return {
        isResultAlert: false,
        user: {}
      }
    },
    computed: {
      alertStyle: function () {
        return 'alert-' + (this.result.type === 'error' ? 'danger' : this.result.type)
      }
    },
    methods: {
      submitForm: function () {
        this.$emit('input', this.user)
      },
      hideAlert: function () {
        this.isResultAlert = false
      }
    },
    watch: {
      result: function (newResult) {
        this.isResultAlert = !!newResult
        setTimeout(() => { this.isResultAlert = false }, 2500)
      }
    },
    mounted () {
      this.user = Object.assign({}, this.value)
    }
  }
</script>

<style scoped>
</style>