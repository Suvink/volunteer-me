import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/HomePage.vue'
import SearchScreen from './components/SearchScreen.vue'
import SubmitPage from './components/SubmitPage.vue'

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
    },
    {
        path: '/add',
        name: 'SubmitPage',
        component: SubmitPage
    }
]

})
