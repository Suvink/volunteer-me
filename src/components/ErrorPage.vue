<template>
  <center>
    <section class="error_block" v-if="!$route.params.fullData">
        <img src="../assets/404.gif">
    </section>
  </center>
</template>

<script>
export default {
    name: 'ErrorPage',
}

</script>

<style>
@import url('../assets/css/style.css');
</style>