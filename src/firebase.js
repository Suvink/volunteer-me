/* eslint-disable */ 
import { initializeApp, firestore} from 'firebase'
export const firebase = require('firebase')
require('firebase/firestore')

export const firebaseApp = initializeApp({
    apiKey: process.env.VUE_APP_FIREBASEAPIKEY,
    authDomain: process.env.VUE_APP_FIREBASEAUTHDOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASEDBURL,
    projectId: process.env.VUE_APP_FIREBASEPROJECTID,
    storageBucket: process.env.VUE_APP_FIREBASESTORAGEBKT,
    messagingSenderId: process.env.VUE_APP_FIREBASEMSGID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.VUE_APP_FIREBASEMESID
})

export const firebaseFirestore = firebaseApp.firestore()