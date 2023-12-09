// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXyK665NFmXLSNQXtZWIlNTzldVtKvU60",
  authDomain: "lmsinstituteadmin.firebaseapp.com",
  projectId: "lmsinstituteadmin",
  storageBucket: "lmsinstituteadmin.appspot.com",
  messagingSenderId: "499688892553",
  appId: "1:499688892553:web:db49fd94b194602498be58",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const messaging = getMessaging(app);
 export default {messaging} 