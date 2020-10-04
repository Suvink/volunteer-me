import Vue from 'vue'
import App from './App.vue'
import NavBar from './components/NavBar.vue'
import ResultCard from './components/ResultCard.vue'
import ListingCard from './components/ListingCard.vue'
import router from './router'
import './firebase'
import { rtdbPlugin } from 'vuefire'
import Footer from './components/Footer.vue'
require('dotenv').config();

//Register Components
Vue.component('NavBar', NavBar)
Vue.component('Footer', Footer)
Vue.component('ResultCard', ResultCard)
Vue.component('ListingCard', ListingCard)

Vue.use(rtdbPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
