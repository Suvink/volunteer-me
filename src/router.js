import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/HomePage.vue'
import SearchScreen from './components/SearchScreen.vue'

Vue.use(Router)

export default new Router({
    routes: [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/search',
        name: 'SearchScreen',
        component: SearchScreen
    }
]

})
