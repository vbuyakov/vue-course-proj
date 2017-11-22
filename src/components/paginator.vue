<template>
    <div>
        <nav v-if="pages > 1" aria-label="Page navigation">
            <ul class="pagination">
                <li v-bind:class="{'disabled' : currentPage == 1 }">
                    <a v-on:click="setPage(currentPage - 1)" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li v-for="p in pages"
                    v-bind:class="{'active' : currentPage == p }"
                ><a v-on:click="setPage(p)">{{p}}</a></li>
                <li v-bind:class="{'disabled' : currentPage == pages}">
                    <a v-on:click="setPage(currentPage + 1)" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
  export default {
    name: 'paginator',
    data () {
      return {
        currentPage: 1
      }
    },
    props: ['pages', 'value'],
    methods: {
      setPage: function (page) {
        if (page < 1 || page > this.pages) return
        this.currentPage = page
        this.$emit('input', page)
      }
    },
    watch: {
      pages: function () {
        this.currentPage = 1
      }
    }
  }
</script>