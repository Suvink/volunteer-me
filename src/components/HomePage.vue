<template>
  <div class="root">
    <div class="container has-text-centered">

        <section class="welcome">
          <div class="columns mt-2 welcome-bar">
            <div class="column is-6">
              <img src="../assets/banner.jpg">
            </div>
            <div class="column is-6">
              <h1 class="title is-1 mb-0">Welcome to Volunteer<strong>ME</strong></h1>
              <h1 class="title is-6 mt-1 mb-2">All the volunteering oppotunities in one place!</h1>
              <div class="tags home-tags">
                <span class="tag is-primary is-medium mr-3"><i class="fas fa-hands-helping home-icon"></i>Volunteering</span>
                <span class="tag is-warning is-medium mr-3"><i class="fas fa-hippo home-icon"></i>Animal Welfare</span>
                <span class="tag is-black is-medium mr-3"><i class="fab fa-github home-icon"></i>Github</span>
              </div>
              <div class="tags home-tags">
                <span class="tag is-danger is-medium mr-3"><i class="fas fa-school home-icon"></i>Teaching</span>
                <span class="tag is-success is-medium mr-3"><i class="fas fa-ambulance home-icon"></i>First Responders</span>
              </div>
            </div>
          </div>
        </section>

        <section class="join mt-4">
          <h1 class="title is-4">Want to make the world a better place? Join hands with us!</h1>
          <div class="is-grouped">
            <router-link to="/search">
              <button class="button is-link mr-3"><i class="fas fa-search home-icon"></i> Find an oppotunity</button>
            </router-link>
            <router-link to="/add">
              <button class="button is-warning" type="submit"><i class="fas fa-plus home-icon"></i> Submit an oppotunity</button>
            </router-link>
          </div>
        </section>

        <section class="about mt-4">
          <div class="columns about">
            <div class="column is-6">
              <img src="../assets/about.png">
              <h1 class="title is-1">About Us</h1>
            </div>
            <div class="column is-6">
              <p class="about-des">
                Volunteer<strong>ME</strong> is an open-source online platform for volunteering.
                Sri Lanka is one of the best places to volunteer in the world. In fact Sri Lanka has 
                the highest rate of volunteering in the world according to the UN Volunteers.<br><br>
                But finding a project to volunteer is not so easy. Mainly because different hosts publish 
                their projects on their own websites and facebook pages and they are scattered everywhere. 
                Volunteer<strong>ME</strong> a common place to list down all the volunteering opportunities in 
                Sri Lanka so that anyone could easily find and work in projects.
              </p>
            </div>
          </div>
        </section>

        <section class="mt-4">
          <h1 class="title is-3 mb-1">It's Open-Source!</h1>
          <h1 class="title is-6 mt-0 mb-2">
            Got an idea to improve Volunteer<strong>ME</strong>? Go ahead and send us a Pull Request!
          </h1>
          <nav class="level is-mobile mt-3">
            <div class="level-item has-text-centered">
              <div>
                <img class="level-gh" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" style="height: 100px">
                <center>
                  <a href="https://github.com/Suvink/volunteer-me" target="__blank">
                    <button class="button is-black mt-1"><i class="fab fa-github home-icon"></i> View on Github</button>
                  </a>
                </center>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <img class="level-gh" src="https://image.flaticon.com/icons/svg/1108/1108905.svg" style="height: 100px">
                <center>
                  <a href="mailto:hello@suvink.me">
                    <button class="button is-info level-email mt-1"><i class="fas fa-envelope home-icon"></i> Email Us</button>
                  </a>
                </center>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <img class="level-dev" src="https://res.cloudinary.com/practicaldev/image/fetch/c_scale,fl_progressive,q_auto,w_190/f_auto/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/rainbowdev.svg" style="height: 100px">
                <center>
                  <a href="https://dev.to/suvink/volunteerme-all-volunteering-in-one-place-2c06" target="__blank">
                    <button class="button is-warning mt-1 btn-dev"><i class="fab fa-dev home-icon"></i> View on Dev Community</button>
                  </a>
                </center>
              </div>
            </div>
          </nav>
        </section>


    </div>
  </div>

</template>

<script>
export default {
  name: 'HomePage',
}
</script>


<style scoped>
@import url('../assets/css/style.css');
</style>
