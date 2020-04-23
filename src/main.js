import Vue from 'vue'
import App from './App.vue'
import NavBar from './components/NavBar.vue'
import ResultCard from './components/ResultCard.vue'
import router from './router'
import './firebase'
import { rtdbPlugin } from 'vuefire'
import Footer from './components/Footer.vue'




//Register Components
Vue.component('NavBar', NavBar)
Vue.component('Footer', Footer)
Vue.component('ResultCard', ResultCard)

Vue.use(rtdbPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
