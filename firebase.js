// firebase.js — XREZZKY Firebase config & SDK exports
import { initializeApp }                                  from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword,
         createUserWithEmailAndPassword, signOut, updateProfile,
         sendPasswordResetEmail }                          from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getDatabase, ref, onValue, set, get, push, update, remove }
                                                          from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

const firebaseConfig = {
    apiKey:            "AIzaSyBouXC_NmAuNydTk3gKL83A1BiyqZQYyXY",
    authDomain:        "marketplace-48c4d.firebaseapp.com",
    databaseURL:       "https://marketplace-48c4d-default-rtdb.firebaseio.com",
    projectId:         "marketplace-48c4d",
    storageBucket:     "marketplace-48c4d.firebasestorage.app",
    messagingSenderId: "565598495756",
    appId:             "1:565598495756:web:0a80f3dd4a56a7f57efa29"
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getDatabase(app);

export {
    auth, db,
    // Auth
    onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword,
    signOut, updateProfile, sendPasswordResetEmail,
    // DB
    ref, onValue, set, get, push, update, remove
};
