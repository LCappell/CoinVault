// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCdMRy7x3k2-5sIQULOn_JfKl-w18e3AQM',
  authDomain: 'coinvault-auth.firebaseapp.com',
  projectId: 'coinvault-auth',
  storageBucket: 'coinvault-auth.appspot.com',
  messagingSenderId: '836722533583',
  appId: '1:836722533583:web:d02c738f0597134adfc3ba',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}
const auth = firebase.auth();
export { auth };
