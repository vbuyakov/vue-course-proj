<template>
    <div class="pretty p-switch p-fill pull-left">
        <input type="checkbox" v-model="conponentValue"/>
        <div class="state">
            <label>{{label}}</label>
        </div>
    </div>
</template>

<script>
  import 'pretty-checkbox/dist/pretty-checkbox.css'

  export default {
    name: 'checkboxPro',
    props: ['label', 'value'],
    data: () => ({
      conponentValue: false
    }),
    mounted () {
      this.conponentValue = this.value
    },
    watch: {
      conponentValue: function (newVal) {
        this.$emit('input', newVal)
      }
    }
  }
</script>

<style scoped>
</style>