
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDFWSJ9Qnl28EnOj68U1v4jP190sodMSu0",
  authDomain: "quickgrow-94915.firebaseapp.com",
  projectId: "quickgrow-94915",
  storageBucket: "quickgrow-94915.appspot.com",
  messagingSenderId: "123657829544",
  appId: "1:123657829544:web:aea19fc2eb94886244d69d"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase }

