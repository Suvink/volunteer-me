import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/HomePage.vue'
import SearchScreen from './components/SearchScreen.vue'
import SubmitPage from './components/SubmitPage.vue'
import DetailsPage from './components/DetailsPage.vue'
import ErrorPage from './components/ErrorPage.vue'
import Login from './components/Login.vue'
import { firebase } from './firebase'

Vue.use(Router)

let router = new Router({
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
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/details/:fullData',
      name: 'DetailsPage',
      component: DetailsPage
    },
    {
      path: '/add',
      name: 'SubmitPage',
      component: SubmitPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      name: 'ErrorPage',
      component: ErrorPage
    }
  ]
})

//NavGuards
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        next({
          path: '/login',
          query: {
            redirect: to.fullPath
          }
        })
      } else {
        next()
      }
    })
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        next({
          path: '/add',
          query: {
            redirect: to.fullPath
          }
        })
      } else {
        next()
      }
    })
  } else {
    next()
  }
})

export default router
