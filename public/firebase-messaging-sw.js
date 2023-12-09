importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);



firebase.initializeApp({
    apiKey: "AIzaSyAXyK665NFmXLSNQXtZWIlNTzldVtKvU60",
    authDomain: "lmsinstituteadmin.firebaseapp.com",
    projectId: "lmsinstituteadmin",
    storageBucket: "lmsinstituteadmin.appspot.com",
    messagingSenderId: "499688892553",
    appId: "1:499688892553:web:db49fd94b194602498be58",
   
})

const messaging = firebase.messaging();