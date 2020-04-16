import { initializeApp } from 'firebase'

const app = initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "volunteer-me-9b8b3.firebaseapp.com",
    databaseURL: "https://volunteer-me-9b8b3.firebaseio.com",
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: "volunteer-me-9b8b3.appspot.com",
    messagingSenderId: "84184041346",
    appId: "1:84184041346:web:60d40904278f4d08c5719b",
    measurementId: "G-Z3MTDM2EFC"
})

export const db = app.database()
export const listingsRef = db.ref('listings')