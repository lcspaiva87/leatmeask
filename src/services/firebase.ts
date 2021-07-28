import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig ={
    apiKey: "AIzaSyCinDniRjfn-ft-n4rtLGuaTFcBSN1urLs",
    authDomain: "letmeask-d440a.firebaseapp.com",
    databaseURL: "https://letmeask-d440a-default-rtdb.firebaseio.com",
    projectId: "letmeask-d440a",
    storageBucket: "letmeask-d440a.appspot.com",
    messagingSenderId: "427354402156",
    appId: "1:427354402156:web:067a00e48c51ee55e11749"
}
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()
export{firebase,auth, database}