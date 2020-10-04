<template>
    <div class="mt-2">
        <div class="columns pl-2 pr-2">
            <div class="column is-9 pr-1 pt-1 pb-1 pl-1">
                <h1 class="title is-1 ml-2">Your <strong>Listings</strong></h1>
                <div class="listings-grid">
                    <ListingCard />
                    <ListingCard />
                    <ListingCard />
                    <ListingCard />
                    <ListingCard />
                    <ListingCard />
                    <ListingCard />
                    <ListingCard />
                </div>
            </div>
            <div class="column is-3 profile-column">
                <div class="card pl-1 pr-1 pt-2 pb-2">
                    <div class="row has-text-centered">
                        <img class="avatar" src="https://lh3.googleusercontent.com/ogw/ADGmqu8z88PmANFQe4bMzrOt6AszgsGU80oL9rD5LxWC=s83-c-mo" alt="Profile Image">
                        <div class="name">
                            <h1 class="title is-5 mt-1">Suvin Nimnaka <sup><i class="text-primary fas fa-check-circle"></i></sup></h1>
                            <h1 class="subtitle is-6">suvinkodituwak@gmail.com</h1>
                        </div>
                        <div class="columns mt-2 is-mobile">
                            <div class="column is-one-third">
                                <h1 class="title is-6">Total <br>4</h1>
                            </div>
                            <div class="column is-one-third">
                                <h1 class="title is-6">Unlisted <br>1</h1>
                            </div>
                            <div class="column is-one-third">
                                <h1 class="title is-6">Active <br>1</h1>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',
}
</script>

<style>
    @import url('../assets/css/style.css');
</style>