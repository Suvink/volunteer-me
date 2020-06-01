<template>
    <router-link :to="{
        name: 'DetailsPage',
        params: {
            fullData  
        }
    }">
        <div class="result-block mb-1">
            <div class="columns">
                <div class="column is-3 alignsenf imgcolumn">
                    <center>
                        <figure class="image is-128x128 bannerimg">
                        <img :src='imgurl'>
                        </figure>
                    </center>
                </div>
                <div class="column is-8 has-text-left alignsenf">
                    <h1 class="title is-5 mb-0 opname">{{ name }}</h1>
                    <div class="oploc">
                        <i class="fas fa-map-marker-alt mt-0 inline oploc"></i>
                        <h1 class="title is-6 inline ml-1 oploc">{{ location }}</h1>
                    </div>
                    <p class="mt-1 item-des">{{ description }}</p>
                    <div class="tags">
                        <span class="tag is-info" v-if="tags[0]">#{{ tags[0] }}</span>
                        <span class="tag is-warning" v-if="tags[1]">#{{ tags[1] }}</span>
                        <span class="tag is-danger" v-if="tags[2]">#{{ tags[2] }}</span>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'ResultCard',
    props: [
        "name",
        "location",
        "description",
        "imgurl",
        "tags",
        "fullData"
    ]   
}
</script>

<style scoped>
@import url('../assets/css/style.css');
a{
    color: #4a4a4a !important
}
</style>
