// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3aJ5E-EsL-T9xvQN2qDC6MCh6fqM1yUY",
    authDomain: "test1-80620.firebaseapp.com",
    projectId: "test1-80620",
    storageBucket: "test1-80620.appspot.com",
    messagingSenderId: "692415625378",
    appId: "1:692415625378:web:fc89d8968a85bf341c3ffb",
    measurementId: "G-C3ZZY6L9FQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);