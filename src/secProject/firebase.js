import firebase from 'firebase';

const firebaseConfig = {
     apiKey: "AIzaSyD-GW40XZqPfze-g8UNxtxhjFsdk0otqvg",
     authDomain: "fir-project-cc8f1.firebaseapp.com",
     databaseURL: "https://fir-project-cc8f1.firebaseio.com",
     projectId: "fir-project-cc8f1",
     storageBucket: "fir-project-cc8f1.appspot.com",
     messagingSenderId: "262672908354",
     appId: "1:262672908354:web:8b1bceaa1aeac1f4b5eddb",
     measurementId: "G-XHZM1SQP4K"
   };

const firebaseApp=firebase.initializeApp
(firebaseConfig);
const db=firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth
.GoogleAuthProvider();

export{auth,provider};
export default db;
