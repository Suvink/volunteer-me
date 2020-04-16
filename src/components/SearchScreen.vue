
<template>
  <div class="root">
    <div class="container has-text-centered">
      <div class="columns">

        <!-- Filters -->
        <div class="column is-2">

        </div>

        <!-- Main -->
        <div class="column is-8">
          <div class="search-block mt-2">
            <div class="field has-addons">
              <p class="control">
                <a class="button is-static">
                  I want to Volunteer in
                </a>
              </p>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select name="country">
                    <option>Select a district</option>
                    <option value="Kalutara ">Kalutara</option>
                    <option value="Ampara">Ampara</option>
                    <option value="Anuradhapura">Anuradhapura</option>
                    <option value="Badulla">Badulla</option>
                    <option value="Batticaloa">Batticaloa</option>
                    <option value="Colombo">Colombo</option>
                    <option value="Galle">Galle</option>
                    <option value="Gampaha">Gampaha</option>
                    <option value="Hambantota">Hambantota</option>
                    <option value="Jaffna">Jaffna</option>
                    <option value="Kandy">Kandy</option>
                    <option value="Kegalle">Kegalle</option>
                    <option value="Kilinochchi">Kilinochchi</option>
                    <option value="Kurunegala">Kurunegala</option>
                    <option value="Mannar">Mannar</option>
                    <option value="Matale">Matale</option>
                  </select>
                </div>
              </div>
              <div class="control">
                <button type="submit" class="button is-primary">Choose</button>
              </div>
            </div>
          </div>

          <div class="results mt-2">
            <ResultCard v-for='(listing, index) in listings'
            v-bind:key="index"
            :name="listing.name"
            :location="listing.location"
            :description="listing.description"
            />
          </div>
        </div>
        <div class="column is-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data(){
    return {
      listings: [ 
          { "name": "Lorem Ipsum Dummy Event 1", "location": "Galle", "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
          { "name": "Lorem Ipsum Dummy Event 2", "location": "Colombo", "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
          { "name": "Lorem Ipsum Dummy Event 3", "location": "Kandy", "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." } 
    ]
    }
  },
  name: 'SearchScreen'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('../assets/css/style.css');

</style>
