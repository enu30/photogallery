import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCF0ahqRkytdNaBpCHoA7AectrS-NuzcG8",
    authDomain: "photogram-11d10.firebaseapp.com",
    projectId: "photogram-11d10",
    storageBucket: "photogram-11d10.appspot.com",
    messagingSenderId: "1018765626727",
    appId: "1:1018765626727:web:53431558ca8d95780e33c2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage=firebase.storage().ref();
  const projectFirestore=firebase.firestore();
  const timestamp=firebase.firestore.FieldValue.serverTimestamp;
  export {projectStorage, projectFirestore,timestamp};