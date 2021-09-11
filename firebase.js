import * as firebase from 'firebase'

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCLPUFb76Gsd_Tg4c_jMMt5sfs-kWqdnX4",
  authDomain: "signal-clone-dd635.firebaseapp.com",
  projectId: "signal-clone-dd635",
  storageBucket: "signal-clone-dd635.appspot.com",
  messagingSenderId: "894538298111",
  appId: "1:894538298111:web:d3af4ba567ab539c4212ca"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export { db, auth }