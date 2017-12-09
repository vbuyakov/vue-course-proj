<template>
    <div class="pretty p-switch p-fill pull-left">
        <input type="checkbox" v-model="checkboxValue"/>
        <div class="state">
            <label>{{label}}</label>
        </div>
    </div>
</template>

<script>
  import 'pretty-checkbox/dist/pretty-checkbox.css'

  export default {
    name: 'checkboxPro',
    props: {
      label: {
        type: String,
        default: ''
      },
      value: {
        type: Boolean,
        required: true
      }
    },
    data: function () {
      return {
        checkboxValue: false
      }
    },
    mounted: function () {
      this.checkboxValue = this.value
    },
    watch: {
      value: function () {
        this.checkboxValue = this.value
      },
      checkboxValue: function () {
        this.$emit('input', this.checkboxValue)
      }
    }
  }
</script>