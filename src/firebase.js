import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDHhv3jorZCwan0O7VIQkLGTk1EA2AwBb8",
  authDomain: "slack-clone-by-ashik.firebaseapp.com",
  projectId: "slack-clone-by-ashik",
  storageBucket: "slack-clone-by-ashik.appspot.com",
  messagingSenderId: "701853169500",
  appId: "1:701853169500:web:3ce43fa6c4a5bc4933f399"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };