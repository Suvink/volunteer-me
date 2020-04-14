import Vue from 'vue'
import App from './App.vue'
import NavBar from './components/NavBar.vue'
import ResultCard from './components/ResultCard.vue'
import router from './router'

//Register Components
Vue.component('NavBar', NavBar)
Vue.component('ResultCard', ResultCard)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
