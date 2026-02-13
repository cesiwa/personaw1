import { initializeApp, getApp, getApps } from 'firebase/app';
// @ts-ignore
import { Auth, getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import AsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Replace with your own Firebase config keys
const firebaseConfig = {
    apiKey: "AIzaSyBFgTasTnBhl7P4m3F7oAU10ksyO3qgHP4",
    authDomain: "persona-a952a.firebaseapp.com",
    projectId: "persona-a952a",
    storageBucket: "persona-a952a.firebasestorage.app",
    messagingSenderId: "740805387688",
    appId: "1:740805387688:web:c64cb1b22f37fdda82e99d",
    measurementId: "G-GGYDP87KVQ"
};

let app;
if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp();
}

let auth: Auth;
try {
    auth = initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage)
    });
} catch (e: any) {
    if (e.code === 'auth/already-initialized') {
        auth = getAuth(app);
    } else {
        console.error("Firebase Auth Init Error:", e);
        throw e;
    }
}

const db = getFirestore(app);
// const storage = getStorage(app); // Storage not used yet, commented out to avoid errors if not configured

export { auth, db };
