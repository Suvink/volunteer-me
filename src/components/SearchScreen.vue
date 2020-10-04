<template>
  <div class="root">
    <div class="container has-text-centered">
      <div class="columns">
        <!-- Filters -->
        <div class="column is-2"></div>

        <!-- Main -->
        <div class="column is-8">
          <div class="search-block mt-2">

            <ValidationObserver v-slot="{ handleSubmit }">
              <form @submit.prevent="handleSubmit(search)">
                <div class="field has-addons">
                  <p class="control">
                    <a class="button is-static">
                      I want to Volunteer in
                    </a>
                  </p>
                  <div class="control is-expanded">
                    <div class="select is-fullwidth">
                      <ValidationProvider rules="required" v-slot="{ errors }">
                        <select name="country" v-model="searchData.keyword">
                          <option value="">Select a district</option>
                          <option value="Ampara">Ampara</option>
                          <option value="Country Wide">Country Wide</option>
                          <option value="Anuradhapura">Anuradhapura</option>
                          <option value="Badulla">Badulla</option>
                          <option value="Batticaloa">Batticaloa</option>
                          <option value="Colombo">Colombo</option>
                          <option value="Galle">Galle</option>
                          <option value="Gampaha">Gampaha</option>
                          <option value="Hambantota">Hambantota</option>
                          <option value="Jaffna">Jaffna</option>
                          <option value="Kalutara">Kalutara</option>
                          <option value="Kandy">Kandy</option>
                          <option value="Kegalle">Kegalle</option>
                          <option value="Kilinochchi">Kilinochchi</option>
                          <option value="Kurunegala">Kurunegala</option>
                          <option value="Mannar">Mannar</option>
                          <option value="Matale">Matale</option>
                          <option value="Matara">Matara</option>
                          <option value="Monaragala">Monaragala</option>
                          <option value="Mullativu">Mullativu</option>
                          <option value="Nuwara Eliya">Nuwara Eliya</option>
                          <option value="Polonnaruwa">Polonnaruwa</option>
                          <option value="Puttalam">Puttalam</option>
                          <option value="Rathnapura">Rathnapura</option>
                          <option value="Trincomalee">Trincomalee</option>
                          <option value="Vavuniya">Vavuniya</option>
                        </select>
                        <h1 class="error-block mb-1">{{ errors[0] }}</h1>
                    </ValidationProvider>
                    </div>
                  </div>
                  <div class="control">
                    <button type="submit" class="button is-primary">Search</button>
                  </div>
                </div>
              </form>
            </ValidationObserver>

          </div>

          <div class="results mt-2">
            <ResultCard
              v-for="(listing, index) in listings"
              v-bind:key="index"
              :name="listing.name"
              :location="listing.location"
              :description="listing.shortdes"
              :imgurl="listing.imgurl"
              :tags="listing.ctags"
              :fullData = "listing"
            />
            <center v-if="searchFail">
              <img class="searchfail-img" src="../assets/searchfail.gif">
              <h1 class="title is-3 mb-0">Sorry! We couldn't find any oppotunity in {{ this.searchData.keyword}} :(</h1>
              <h1 class="title is-6 mt-1 searchfail">Try a different area and see!</h1>
            </center>
          </div>
        </div>
        <div class="column is-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { firebaseApp,firebase } from '../firebase'
/* eslint-disable no-unused-vars */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { extend } from 'vee-validate'
require('dotenv').config();

import { required } from 'vee-validate/dist/rules'
extend('required', {
  ...required,
  message: 'Please select a district to search!'
})

export default {
  data () {
    return {
      searchFail: false,
      listings: [],
      searchData: {
        keyword: ""
      }
    }
  },
  name: 'SearchScreen',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  created(){
    let thisState = this;
    firebaseApp.firestore().collection("listings").get()
    .then(querySnapshot => {
      querySnapshot.forEach(function (doc){
        thisState.listings.push(doc.data())
      })
    })
    .catch(err => {
      console.log(err)
    })
  },
  methods: {
    search () {
      let thisState = this;
      this.listings = []
      this.searchFail = false
      firebaseApp.firestore().collection("listings").where("location", "==",this.searchData.keyword).get()
      .then(querySnapshot => {
        if(querySnapshot.empty){
          thisState.searchFail = true
        }
        querySnapshot.forEach(function (doc){
          thisState.listings.push(doc.data())
        })
      })
      .catch(err => {
        console.log(err)
        this.searchFail = true
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('../assets/css/style.css');
</style>
