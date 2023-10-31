import { initializeApp } from "firebase/app";

const apiKey = process.env.FIREBASE_API_KEY
const messagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID
const appId = process.env.FIREBASE_APP_ID
const measurementId = process.env.FIREBASE_MEASUREMENT_ID

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "scholarly-website.firebaseapp.com",
  databaseURL: "https://scholarly-website-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "scholarly-website",
  storageBucket: "scholarly-website.appspot.com",
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId
};

const app = initializeApp(firebaseConfig);

export default app