import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBuPbAhTeLx56P762h1gVqJhFKRuadb22o",
    authDomain: "hellodemo-385bc.firebaseapp.com",
    projectId: "hellodemo-385bc",
    storageBucket: "hellodemo-385bc.appspot.com",
    messagingSenderId: "127621157455",
    appId: "1:127621157455:web:e7615ab826d16b4931903a"
};

firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebase