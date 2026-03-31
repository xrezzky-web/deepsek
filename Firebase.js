// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { 
    getDatabase, 
    ref, 
    onValue, 
    set, 
    get, 
    push, 
    update, 
    remove,
    query,
    orderByChild,
    equalTo,
    limitToLast,
    onChildAdded,
    onChildChanged,
    onChildRemoved,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";
import { 
    getStorage, 
    ref as storageRef, 
    uploadBytes, 
    getDownloadURL, 
    deleteObject 
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-storage.js";

// Konfigurasi Firebase XREZZKY STORE
const firebaseConfig = {
    apiKey: "AIzaSyBouXC_NmAuNydTk3gKL83A1BiyqZQYyXY",
    authDomain: "marketplace-48c4d.firebaseapp.com",
    databaseURL: "https://marketplace-48c4d-default-rtdb.firebaseio.com",
    projectId: "marketplace-48c4d",
    storageBucket: "marketplace-48c4d.firebasestorage.app",
    messagingSenderId: "565598495756",
    appId: "1:565598495756:web:0a80f3dd4a56a7f57efa29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export semua yang dibutuhkan
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);

// Export database functions
export { 
    ref, 
    onValue, 
    set, 
    get, 
    push, 
    update, 
    remove,
    query,
    orderByChild,
    equalTo,
    limitToLast,
    onChildAdded,
    onChildChanged,
    onChildRemoved,
    serverTimestamp
};

// Export storage functions
export { 
    storageRef,
    uploadBytes, 
    getDownloadURL, 
    deleteObject 
};

// Export app jika diperlukan
export default app;
