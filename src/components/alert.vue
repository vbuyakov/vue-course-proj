<template>
    <div>
        <div class="alert absolutetopright " :class="alertClass" role="alert" v-if="isShow">
            {{ msg }}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="hide"><span
                    aria-hidden="true">×</span></button>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'alert',
    data: function () {
      return {
        msg: ''
      }
    },
    computed: {
      message: function () {
        return this.$store.state.message
      },
      type: function () {
        return this.$store.state.type
      },
      updated: function () {
        return this.$store.state.updated
      },
      alertClass: function () {
        return 'alert-' + this.type
      },
      isShow: function () {
        return this.msg && this.msg !== ''
      }

    },
    methods: {
      hide: function () {
        this.msg = ''
      },
      show: function () {
        this.msg = this.message
        setTimeout(() => {
          this.hide()
        }, 1500)
      }
    },
    watch: {
      updated: function () {
        this.show()
      }
    }
  }
</script>

<style scoped>
    .absolutetopright {
        position: fixed;
        top: 10px;
        right: 200px;
        z-index: 100001
    }
    .absolutetopright button {
        margin-left: 10px;
    }
</style>