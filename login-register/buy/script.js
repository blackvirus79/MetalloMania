import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAAi9VKMwACSJOInmSGIT0HcHCbvr-MMB8",
    authDomain: "metallomania-32a64.firebaseapp.com",
    databaseURL: "https://metallomania-32a64-default-rtdb.firebaseio.com",
    projectId: "metallomania-32a64",
    storageBucket: "metallomania-32a64.appspot.com",
    messagingSenderId: "877624865418",
    appId: "1:877624865418:web:f1dec9e57ec97e6b323373",
    measurementId: "G-HE6J5LREJJ"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const signupEmailIn = document.getElementById("emailInput");

const signupPasswordIn = document.getElementById("passwordInput");

const createacctbtn = document.getElementById("register-button");

var signupEmail, signupPassword;

createacctbtn.addEventListener("click", function () {

  signupEmail = signupEmailIn.value;

  signupPassword = signupPasswordIn.value;


    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
        // Sign Up
        const user = userCredential.user;
        
        window.alert("Success! Account created.");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        window.alert("Success! Account created. Go for Login");
      });

});
