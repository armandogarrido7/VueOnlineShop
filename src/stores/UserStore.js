import { defineStore } from "pinia";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.js";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";


export const useUserStore = defineStore("UserStore", {
    state: () => {
        return {
            isAuthenticated: false,
            login_email: '',
            login_password: '',
            register_email: '',
            register_password: ''
        }
    },
    getters: {
        getAuthenticated() {
            return this.isAuthenticated;
        }
    },
    actions: {
        updateAuth(newState) {
            this.isAuthenticated = newState;
        },
        closeSession() {
            signOut(auth).then(() => {
                router.push('/home');
            }).catch((error) => {
                // An error happened.
            });
        },
        login() {
            signInWithEmailAndPassword(auth, this.login_email, this.login_password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
            this.login_email = '';
            this.login_password = '';
        },
        loginWithGoogle() {
            const provider = new GoogleAuthProvider();
            console.log("iniciando sesion con google");
            signInWithRedirect(auth, provider).then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log("sesion iniciada con google");
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode, "=>", errorMessage)
                    // ...
            });
        },
        register() {
            createUserWithEmailAndPassword(auth, this.register_email, this.register_password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        }
    }
});