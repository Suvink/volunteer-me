<template>
    <div class="result-block mb-1">
        <div class="columns">
            <div class="column is-3 alignsenf">
                  <center>
                    <figure class="image is-128x128">
                      <img src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/11/medical-logo-design.jpeg">
                    </figure>
                  </center>
            </div>
            <div class="column is-8 has-text-left alignsenf">
                <h1 class="title is-5 mb-0 opname">{{ name }}</h1>
                <div class="oploc">
                    <i class="fas fa-map-marker-alt mt-0 inline oploc"></i>
                    <h1 class="title is-6 inline ml-1 oploc">{{ location }}</h1>
                </div>
                <p class="mt-1">{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResultCard',
    props: [
        "name",
        "location",
        "description" 
    ]
}
</script>

<style>
@import url('../assets/css/style.css');
</style>