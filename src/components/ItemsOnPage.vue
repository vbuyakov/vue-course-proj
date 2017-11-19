<template>
    <div>
        <span>Пользователей на странице:</span>
        <select v-model="currentCount">
            <option v-for="item in itemCounts" v-bind:value="item">{{ item }}</option>
        </select>
    </div>
</template>

<script>
  export default {
    name: 'ItemsOnPage',
    data () {
      return {
        itemCounts: [5, 10, 15, 30, 60],
        currentCount: 5
      }
    },
    props: {
      value: {
        default: 5,
        type: Number
      }
    },
    watch: {
      currentCount: function (newCount) {
        this.$emit('input', newCount)
      }
    }
  }
</script>

<style scoped>
</style>