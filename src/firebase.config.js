import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAhzhU1nhzkZoa2xI-FZ69dn85eHxZ71Wk",
	authDomain: "house-market-place-d54a9.firebaseapp.com",
	projectId: "house-market-place-d54a9",
	storageBucket: "house-market-place-d54a9.appspot.com",
	messagingSenderId: "129569814758",
	appId: "1:129569814758:web:f518f7574a470e45a82327",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
