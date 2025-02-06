// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCG7DH9-lja6jtZpTAnpa2f5RmQLciodIk',
  authDomain: 'diarista-online-web.firebaseapp.com',
  projectId: 'diarista-online-web',
  storageBucket: 'diarista-online-web.firebasestorage.app',
  messagingSenderId: '402040825295',
  appId: '1:402040825295:web:b51a3aa76df04215b55eba',
  measurementId: 'G-XBYJEVY2M0',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app)

const db = getFirestore(app)
export { db }
