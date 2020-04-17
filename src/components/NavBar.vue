<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <img src="../assets/logo-trans.png" width="112" height="28">
            </a>
    
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-end">
            <div class="navbar-item">
                    <div class="buttons">
                        <router-link to="/search">
                            <a class="button is-primary">
                                <strong>Search</strong>
                            </a>
                        </router-link>
                        <router-link to="/add">
                            <a class="button is-primary ml-2">
                                <strong>Add Events</strong>
                            </a>
                        </router-link>
                    </div>
                
            </div>
        </div>
    </nav>
</template>

<script>
</script>

<style lang="css" scoped>
@import url('../assets/css/style.css');
</style>
