import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBKG46WEF8c4YLyFXALyQxzD5P-4wreGdw",
  authDomain: "donationcity-6fa3d.firebaseapp.com",
  projectId: "donationcity-6fa3d",
  storageBucket: "donationcity-6fa3d.appspot.com",
  messagingSenderId: "852765153308",
  appId: "1:852765153308:web:438d930dc8a6c2260ea7d9",
  measurementId: "G-1HCENF4F1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export { app, auth };