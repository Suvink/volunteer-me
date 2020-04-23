<template>
  <center>
    <section class="error_block" v-if="!$route.params.fullData">
        <img src="https://www.shivamits.com/wp-content/uploads/2019/12/404-dribbble.gif">
    </section>
  </center>
</template>

<script>
export default {
    name: 'ErrorPage'
}
</script>

<style>
@import url('../assets/css/style.css');
</style>