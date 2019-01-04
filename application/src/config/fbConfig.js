import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyDFnxPsY3Ew0GFCaViwmhC3LRxKFyvZ5sE",
  authDomain: "projects-notebook.firebaseapp.com",
  databaseURL: "https://projects-notebook.firebaseio.com",
  projectId: "projects-notebook",
  storageBucket: "projects-notebook.appspot.com",
  messagingSenderId: "840849151818"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 