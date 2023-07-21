// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAzMdeuqjL8qY1x5VueieaM_zYSKWPWkWs',
  authDomain: 'articless-17fa9.firebaseapp.com',
  projectId: 'articless-17fa9',
  storageBucket: 'articless-17fa9.appspot.com',
  messagingSenderId: '214868504380',
  appId: '1:214868504380:web:2e07def29f42fc7f5b7839',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db };
