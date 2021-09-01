// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Firebase products 
import { 
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';

import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    getFirestore,
    setDoc
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8vt4offVQhcjvDXEYZPWFFgSwL5Fsjk8",
    authDomain: "frontendtest-c4f5d.firebaseapp.com",
    projectId: "frontendtest-c4f5d",
    storageBucket: "frontendtest-c4f5d.appspot.com",
    messagingSenderId: "723106704554",
    appId: "1:723106704554:web:94a478f8f5c86f0fdc74d3",
    measurementId: "G-PR3Z0K6PNP"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

const auth = getAuth();

export const changesAuthStates = (onChange) => {
    return onAuthStateChanged(auth, (user) => {
        if (user && !user.isAnonymous) {
            console.log('Logged in');
            onChange({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
            });
        } else {
            console.log('You are not logged in');
            onChange(null);
        }
    });
}

export const checkIn = (userName, email, password) => {
    const auth2 = getAuth();
    createUserWithEmailAndPassword(auth2, email, password)
        .then(userCredential => {
            console.log(userCredential)
            window.location.assign("/test")

            updateProfile(auth2.currentUser, {
                displayName: userName
            })

        }).catch(e => {
            alert('Intente de nuevo.')
            console.log(e);
        });
};

export const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            console.log(userCredential)
            window.location.assign("/test")
        }).catch(e => {
            alert('Verifique sus credenciales.')
            console.log(e);
        });
};

export const signInGoogle = () => {
    const googleProvider = new GoogleAuthProvider()

    return signInWithPopup(auth, googleProvider)
        .then((userCredential) => {
            console.log(userCredential)
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(userCredential);
            const token = credential.accessToken;
            // The signed-in user info.
            const userR = userCredential.user;
            window.location.assign("/test")
        }).catch(e => {
            alert('Ocurrió un error intenta de nuevo.')
            console.log(e);

            // Handle Errors here.
            const errorCode = e.code;
            const errorMessage = e.message;
            // The email of the user's account used.
            const email = e.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(e);
            // ...
            console.log('errorCode: ', errorCode)
            console.log('errorMessage: ', errorMessage)
            console.log('email: ', email)
            console.log('credential: ', credential)
        });
}

export const signInFacebook = () => {
    const providerFacebook = new FacebookAuthProvider();

    return signInWithPopup(auth, providerFacebook)
        .then((userCredential) => {
            console.log(userCredential)
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = FacebookAuthProvider.credentialFromResult(userCredential);
            const token = credential.accessToken;
            // The signed-in user info.
            const userR = userCredential.user;
            console.log('userCredential: ', userR)
            window.location.assign("/test")
        }).catch(e => {
            alert('Ocurrió un error intenta de nuevo.')
            console.log(e);

            // Handle Errors here.
            const errorCode = e.code;
            const errorMessage = e.message;
            // The email of the user's account used.
            const email = e.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(e);
            // ...
            console.log('errorCode: ', errorCode)
            console.log('errorMessage: ', errorMessage)
            console.log('email: ', email)
            console.log('credential: ', credential)
        });
}


export const logOut = () => {
    signOut(auth).then(() => {
        window.location.assign("/");
    }).catch((error) => {
        alert("Ocurrió un error.");
        console.log(error);
    })
}

export const addFavorite = (id, title, body) => {
    const docRef = setDoc(doc(db, auth.currentUser.uid, `${id}`), {
        id: id,
        title: title,
        body: body
    }).then(() => {
        console.log("Document written with ID: ", id);
    }).catch((e) => {
        console.error("Error adding document: ", e);
    })
}

export const deleteFavorite = (id) => {
    deleteDoc(doc(db, auth.currentUser.uid, `${id}`))
}

export const addFav = (id, title, body) => {
    return addDoc(collection(db, auth.currentUser.uid), {
        id: id,
        title: title,
        body: body
    })

}

export const fetchFavorites = () => {
    return getDocs(collection(db, auth.currentUser.uid))
        .then(snapshot => {
            return snapshot.docs.map(doc => {
                const data = doc.data()
                const id = doc.id
                return {
                    id,
                    ...data
                }
            })
        })
}
