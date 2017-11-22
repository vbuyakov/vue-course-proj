<template>
    <div>
        <input type="text" ref="picker" class="form-control" :value="value">
    </div>
</template>

<script>
  import flatpickr from 'flatpickr'
  import 'flatpickr/dist/flatpickr.css'

  export default {
    name: 'DatePicker',
    props: {
      'value': {
        type: String,
        required: true
      }
    },
    date: () => ({
      fp: null
    }),
    methods: {
      updatePicker () {
        this.fp.setDate(this.value)
      }
    },
    mounted () {
      this.fp = flatpickr(this.$refs.picker, {
        dateFormat: 'Y-m-d',
        onChange: (selectDate, dateStr) => {
          this.$emit('input', dateStr)
        }
      })
    },
    watch: {
      value: function () {
        this.updatePicker()
      }
    }
  }
</script>