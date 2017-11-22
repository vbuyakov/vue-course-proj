<template>
  <div class="hello">
    <data-table :apiUrl="url"></data-table>
  </div>
</template>

<script>
import DataTable from './DataTable.vue'
import cfg from '@/config.js'

export default {
  components: {DataTable},
  name: 'UsersList',
  computed: {
    url: function () {
      return cfg.API_URL + '/users'
    }
  }
}
</script>