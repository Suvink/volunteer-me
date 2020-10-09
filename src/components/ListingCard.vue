<template>
  <div class="card listings-card pl-1 pr-1 pt-1 pb-1 ml-1 mr-1 mt-1 mb-1">
    <img
      :src="imgurl"
      alt="Event Image"
    />
    <h1 class="title is-5 mb-0 mt-1">{{ eventname }}</h1>
    <div class="oploc mt-1 has-text-centered">
      <i class="fas fa-map-marker-alt mt-0 inline oploc" v-if="location"></i>
      <h1 class="title is-6 inline ml-1 oploc">{{ location }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListingCard",
  props: [
        "eventname",
        "location",
        "imgurl"
    ]  
};
</script>

<style>
@import url("../assets/css/style.css");
</style>
