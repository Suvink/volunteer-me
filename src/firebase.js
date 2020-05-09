import { initializeApp } from 'firebase'

const app = initializeApp({
    apiKey: process.env.VUE_APP_FIREBASEAPIKEY,
    authDomain: process.env.VUE_APP_FIREBASEAUTHDOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASEDBURL,
    projectId: process.env.VUE_APP_FIREBASEPROJECTID,
    storageBucket: process.env.VUE_APP_FIREBASESTORAGEBKT,
    messagingSenderId: process.env.VUE_APP_FIREBASEMSGID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.VUE_APP_FIREBASEMESID
})

export const db = app.database()
export const listingsRef = db.ref('listings')