<template>
  <div class="mt-2">
    <div class="columns pl-2 pr-2">
      <div class="column is-9 pr-1 pt-1 pb-1 pl-1">
        <h1 class="title is-1 ml-2">Your <strong>Listings</strong></h1>
        <div class="listings-grid">
          <!-- Add Event Button -->
          <router-link to="/add">
              <div class="card listings-card pl-1 pr-1 pt-1 pb-1 ml-1 mr-1 mt-1 mb-1">
              <img
                src="../assets/addevent.jpg"
                alt="Event Image"
              />
              <h1 class="title is-3 mb-0 mt-0 has-text-centered">Add <strong>Event</strong></h1>
              <h1 class="title is-6 mb-0 mt-1 has-text-centered">Help make the world better!</h1>
            </div>
          </router-link>
          <div v-for="(listing, index) in listings" v-bind:key="index">
            <ListingCard :eventname="listing.name" :location="listing.location" :imgurl="listing.imgurl" />
          </div>
        </div>
      </div>
      <div class="column is-3 profile-column">
        <div class="card pl-1 pr-1 pt-2 pb-2">
          <div class="row has-text-centered">
            <img
              class="avatar"
              :src="this.userdata.photo "
              alt="Profile Image"
            />
            <div class="name">
              <h1 class="title is-5 mt-1">
                {{ this.userdata.name }}
                <sup><i class="text-primary fas fa-check-circle"></i></sup>
              </h1>
              <h1 class="subtitle is-6">{{ this.userdata.email }}</h1>
            </div>
            <div class="columns mt-2 is-mobile">
              <div class="column is-one-third">
                <h1 class="title is-6">Total <br />{{ this.userdata.listings }}</h1>
              </div>
              <div class="column is-one-third">
                <h1 class="title is-6">Unlisted <br />0</h1>
              </div>
              <div class="column is-one-third">
                <h1 class="title is-6">Active <br />{{ this.userdata.listings }}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { firebaseApp } from "../firebase";

export default {
  name: "Dashboard",
  data() {
    return {
      listings: [],
      userdata: {
        name: "",
        email: "",
        listings: 0,
        photo: ''
      },
    };
  },
  created() {
    let thisState = this;
    this.userdata.name = firebaseApp.auth().currentUser.displayName;
    this.userdata.email = firebaseApp.auth().currentUser.email;
    this.userdata.photo = firebaseApp.auth().currentUser.photoURL;

    firebaseApp
      .firestore()
      .collection("listings")
      .where("userid", "==", firebaseApp.auth().currentUser.uid)
      .get()
      .then((querySnapshot) => {
        thisState.userdata.listings = querySnapshot.size;
        querySnapshot.forEach(function(doc) {
          thisState.listings.push(doc.data());
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
</script>

<style>
@import url("../assets/css/style.css");
</style>
