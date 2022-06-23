import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1HpcTTV_6CSq3P0otUVhhawF3wYAxNGc",
  authDomain: "netflix-clone-5b6a2.firebaseapp.com",
  projectId: "netflix-clone-5b6a2",
  storageBucket: "netflix-clone-5b6a2.appspot.com",
  messagingSenderId: "828403468318",
  appId: "1:828403468318:web:7292893aec4e410037060f",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Setup database for firebase
//const db = firebaseApp.firestore();
//setup authentication
const auth = firebase.auth();
//Googled authentication
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

//export default db;
