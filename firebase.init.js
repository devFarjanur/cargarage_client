// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRBXuUXZQGUqOVk63fsmA7961LziEPE9Y",
  authDomain: "cargarage-client.firebaseapp.com",
  projectId: "cargarage-client",
  storageBucket: "cargarage-client.appspot.com",
  messagingSenderId: "514312376714",
  appId: "1:514312376714:web:be60b1f840f91852a63873",
  measurementId: "G-HVPLHC01DX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;