<template>
    <div id="app">
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                            aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <router-link to="/">
                    <a class="navbar-brand">Vue.Js cource project</a>
                    </router-link>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <router-link to="/users" tag="li" active-class="active" exact>
                            <a>Список пользователей</a>
                        </router-link>
                        <router-link to="/user/add" tag="li" active-class="active" exact>
                            <a>Добавить пользователя</a>
                        </router-link>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container">

            <div class="starter-template">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }

    .m-5-left {
        margin-left: 5px;
    }

    .m-5-right {
        margin-right: 5px;
    }
</style>
