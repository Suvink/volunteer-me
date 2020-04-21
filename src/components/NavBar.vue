<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
     <a class="navbar-item" href="/">
        <img src="../assets/logo-trans.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/search">
              <button class="button is-link mr-1"><i class="fas fa-search home-icon"></i> Find</button>
            </router-link>
            <router-link to="/add">
              <button class="button is-warning" type="submit"><i class="fas fa-plus home-icon"></i> Submit</button>
            </router-link>
        </div>
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
