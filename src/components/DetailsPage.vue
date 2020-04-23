<template>
  <div class="container mt-2" v-if="$route.params.fullData">
    <div class="columns">
      <div class="column is-2"></div>
      <div class="column is-8">

        <div class="box titlebox">
          <article class="media media-mobile">
            <div class="media-left self-align-center">
              <center>
                <figure class="image is-128x128">
                  <img :src="$route.params.fullData.imgurl" alt="Image">
                </figure>
              </center>
            </div>
            <div class="media-content self-align-center">
              <div class="content">
                <h1 class="title is-4 has-text-centered mb-0 media-name">{{ $route.params.fullData.name }}</h1>
                <h1 class="title is-6 has-text-centered mt-1 media-by">By {{ $route.params.fullData.orgname }}</h1>
              </div>
            </div>
          </article>
        </div>

        <section>
          <center>
          <img src="../assets/details.png" style="height: 250px">
        </center>
          <div class="details">
            <h1 class="title is-4 mt-2 mb-0">Hosted by:</h1>
            <h1 class="titie is-6">{{ $route.params.fullData.orgname }}</h1>

            <h1 class="title is-4 mt-2 mb-0">Location</h1>
            <p>{{ $route.params.fullData.location }}</p>

            <h1 class="title is-4 mt-2">About this oppotunity</h1>
            <p class="details-fuldes">
              {{ $route.params.fullData.fulldes }}
            </p>

            <h1 class="title is-4 mt-2">Volunteer Role</h1>
            <p class="details-fuldes">
              {{ $route.params.fullData.role }}
            </p>

            <h1 class="title is-4 mt-2">Selection Criteria</h1>
            <p class="details-fuldes">
              {{ $route.params.fullData.selection }}
            </p>

            <h1 class="title is-4 mt-2">How To Apply?</h1>
            <p class="details-fuldes">
              Please contact the host with following details.
            </p>
            <div class="oploc mt-1">
                    <i class="fas fa-phone-alt mt-0 inline oploc"></i>
                    <h1 class="title is-6 inline ml-1 oploc">+{{ $route.params.fullData.contactno }}</h1>
            </div>
            <div class="oploc mt-1">
                    <i class="fas fa-envelope mt-0 inline oploc"></i>
                    <h1 class="title is-6 inline ml-1 oploc">{{ $route.params.fullData.email }}</h1>
            </div>

            <h1 class="title is-4 mt-2">Tags</h1>
            <div class="tags">
                    <span class="tag is-info">#{{ $route.params.fullData.ctags.t1 }}</span>
                    <span class="tag is-warning">#{{ $route.params.fullData.ctags.t2 }}</span>
                    <span class="tag is-danger">#{{ $route.params.fullData.ctags.t3 }}</span>
                </div>
          </div>
        </section>
      </div>
      <div class="column is-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailsPage',
}
</script>

<style>
@import url('../assets/css/style.css');
</style>