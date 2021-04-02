import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDXsthWRwlnpTtOdaG3gINkUez_aWgPDnM",
  authDomain: "whatsapp-clone-fecef.firebaseapp.com",
  projectId: "whatsapp-clone-fecef",
  storageBucket: "whatsapp-clone-fecef.appspot.com",
  messagingSenderId: "33163054819",
  appId: "1:33163054819:web:f500775ce392816692ffd6",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebase.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
