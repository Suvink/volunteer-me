<template>
  <div class="root">
    <div class="container has-text-centered">
      <h1 class="title is-1 mb-0">Submit an oppotunity</h1>

      <div class="columns mt-2">
        <div class="column is-6">
          <h1 class="title is-6 mb-0 text-primary">Contribute to the world!</h1>
          <h1 class="title is-4 mb-1 mt-0">VolunteerME project submissions</h1>
        </div>
        <div class="column is-6 has-text-left">
          <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(submitData)">
              <div class="field">
                <label class="label">Event Name</label>
                <div class="control">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <input
                      class="input"
                      type="text"
                      placeholder="Event Name"
                      v-model="formData.name"
                      required
                    />
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="field">
                <label class="label">Host Name</label>
                <div class="control">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <input
                      class="input"
                      type="text"
                      placeholder="Host Name"
                      v-model="formData.orgname"
                      required
                    />
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="field">
                <label class="label">Host Email</label>
                <div class="control">
                  <ValidationProvider
                    rules="required|email"
                    v-slot="{ errors }"
                  >
                    <input
                      class="input"
                      type="text"
                      placeholder="Host's Email"
                      v-model="formData.email"
                      required
                    />
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="field">
                <label class="label">Host Contact Number</label>
                <div class="control">
                  <ValidationProvider
                    rules="required|numeric"
                    v-slot="{ errors }"
                  >
                    <input
                      class="input"
                      type="text"
                      placeholder="Host's contact number"
                      v-model="formData.contactno"
                      required
                    />
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="field">
                <label class="label">Start Date</label>
                <div class="control">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <input
                      class="input"
                      type="text"
                      placeholder="Start Date (DD-MM-YYY)"
                      v-model="formData.startdate"
                      required
                    />
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="field">
                <label class="label">Banner Image URL</label>
                <div class="control">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <input
                      class="input"
                      type="text"
                      placeholder="Recomended 1x1"
                      v-model="formData.imgurl"
                      required
                    />
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="field">
                <label class="label">Location</label>
                <div class="control">
                  <div class="select" required>
                    <ValidationProvider rules="required" v-slot="{ errors }">
                      <select v-model="formData.location">
                        <option value="">Select a district</option>
                        <option value="Ampara">Ampara</option>
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
              </div>
              <div class="field">
                <label class="label">Short Description</label>
                <div class="control">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <textarea
                      class="textarea"
                      placeholder="A brief description about the project"
                      v-model="formData.shortdes"
                      required
                    ></textarea>
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="field">
                <label class="label">Detailed Description</label>
                <div class="control">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <textarea
                      class="textarea"
                      placeholder="The detailed full description about the project"
                      v-model="formData.fulldes"
                      required
                    ></textarea>
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="field">
                <label class="label">Volunteer Role</label>
                <div class="control">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <textarea
                      class="textarea"
                      placeholder="What does the volunteer has to do in the project?"
                      v-model="formData.role"
                      required
                    ></textarea>
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="field">
                <label class="label">Selection Criteria (If Any)</label>
                <div class="control">
                  <textarea
                    class="textarea"
                    placeholder="If there are any selections, tell us how would you select volunteers."
                    v-model="formData.selection"
                  ></textarea>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <ValidationProvider rules="required" v-slot="{ errors }">
                      <input
                        type="checkbox"
                        v-model="terms"
                        value="terms"
                        required
                      />
                      I hereby agree to the <a href="#">terms and conditions</a>
                      <span class="error-block">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </label>
                </div>
              </div>
              <div class="field is-grouped mb-3">
                <div class="control">
                  <button class="button is-link" type="submit">Submit</button>
                </div>
                <div class="control">
                  <button class="button is-link is-light">Cancel</button>
                </div>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { listingsRef } from '../firebase'
/* eslint-disable no-unused-vars */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { extend } from 'vee-validate'

import { required, email, numeric } from 'vee-validate/dist/rules'
extend('email', {
  ...email,
  message: 'Please enter a valid email address!'
})
extend('required', {
  ...required,
  message: 'This field is required!'
})
extend('numeric', {
  ...numeric,
  message: 'Must be a number!'
})

export default {
  name: 'SearchPage',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      terms: '',
      formData: {
        name: '',
        location: '',
        shortdes: '',
        fulldes: '',
        orgname: '',
        startdate: '',
        selection: '',
        role: '',
        email: '',
        contactno: '',
        imgurl: ''
      }
    }
  },
  methods: {
    submitData () {
      if (!this.formData.imgurl) {
        this.formData.imgurl =
          'https://wizardly-visvesvaraya-500b32.netlify.app/favicon.png'
      }
      console.log(this.formData)

      //Push into Firebase
      listingsRef.push(this.formData, function (error) {
        if (error) {
          alert('Something went wrong!')
        } else {
          alert('Form submitted successfully!')
        }
      })
      alert('Form Submitted!')
    }
  }
}
</script>

<style scoped>
@import url('../assets/css/style.css');
</style>
