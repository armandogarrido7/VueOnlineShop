// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { onAuthStateChanged } from "firebase/auth";
import { router } from "./router/router.js";
import { useUserStore } from "./stores/UserStore.js";
import { query, where } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const isAuthenticated = useUserStore();
const firebaseConfig = {
    apiKey: "AIzaSyDuVFgSUv9TGs-QXwmxcoqdBMG3cKtqEDs",
    authDomain: "onlineshop-a5154.firebaseapp.com",
    // authDomain: "127.0.0.1",
    projectId: "onlineshop-a5154",
    storageBucket: "onlineshop-a5154.appspot.com",
    messagingSenderId: "614848453196",
    appId: "1:614848453196:web:e5805bde9bb5f90717f2e9",
    measurementId: "G-GB76PYV7PM"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        useUserStore().updateAuth(true);
        // console.log(useUserStore().getAuthenticated);
        router.push('/admin')
            // console.log("Usuario ha iniciado sesion correctamente");
    } else {
        // User is signed out
        useUserStore().updateAuth(false);
        router.push('/');
        // console.log("Usuario ha cerrado sesion correctamente");
    }
});

export const menProductsQuery = query(collection(db, "products"), where("category", "==", "men"));
export const womenProductsQuery = query(collection(db, "products"), where("category", "==", "women"));
export const electronicsProductsQuery = query(collection(db, "products"), where("category", "==", "electronics"));
export const jewelryProductsQuery = query(collection(db, "products"), where("category", "==", "jewelry"));