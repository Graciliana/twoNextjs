import firebase from 'firebase/app'
import 'firebase/auth'

if (!firebase.app.length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: 'twovs-ad873.appspot.com',
    messagingSenderId: '793634377147',
    appId: '1:793634377147:web:81c3420aacd0b9b344489e',
    measurementId: 'G-M33SJFFQVS',
  })
}

export default firebase
