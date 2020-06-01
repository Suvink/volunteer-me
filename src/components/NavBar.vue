<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="../assets/logo-trans.png" width="112" height="28" />
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
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
              <button class="button is-link mr-1">
                <i class="fas fa-search home-icon"></i> Find
              </button>
            </router-link>
            <router-link to="/add">
              <button class="button is-warning mr-1" type="submit">
                <i class="fas fa-plus home-icon"></i> Submit
              </button>
            </router-link>
            <button class="button is-danger" type="submit" v-if="isLoggedIn" @click="logout">
              <i class="fas fa-user home-icon"></i>Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { firebaseApp,firebase } from '../firebase'
export default {
  name: 'NavBar',
  data () {
    return {
      isLoggedIn: 'false',
      currentUser: ''
    }
  },
  mounted () {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.isLoggedIn = true
        this.currentUserName = user.displayName
      }else{
        this.isLoggedIn = false
      }
    })
  },
  methods: {
    logout: function () {
      firebaseApp
        .auth()
        .signOut()
        .then(() => {
          this.isLoggedIn = false
          this.$router.push('/')
        })
    }
  }
}
</script>

<style lang="css" scoped>
@import url('../assets/css/style.css');
</style>
