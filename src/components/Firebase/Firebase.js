// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDNn1EEu9t4TTMcdXUNU9PAPR5bU1grhrI",
//   authDomain: "shopzee-f6bc4.firebaseapp.com",
//   projectId: "shopzee-f6bc4",
//   storageBucket: "shopzee-f6bc4.appspot.com",
//   messagingSenderId: "462976546337",
//   appId: "1:462976546337:web:9761a659602e9afffa5560",
//   measurementId: "G-WYE69ER3ZB",
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNn1EEu9t4TTMcdXUNU9PAPR5bU1grhrI",
  authDomain: "shopzee-f6bc4.firebaseapp.com",
  databaseURL:
    "https://shopzee-f6bc4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shopzee-f6bc4",
  storageBucket: "shopzee-f6bc4.appspot.com",
  messagingSenderId: "462976546337",
  appId: "1:462976546337:web:9761a659602e9afffa5560",
  measurementId: "G-WYE69ER3ZB",
};
// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getDatabase(app);
// const analytics = getAnalytics(app);
// export default auth;
