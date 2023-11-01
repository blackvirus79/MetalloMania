 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBYbW3LQXwH9VTdn1T4OuY3Szf7iCND_WY",
   authDomain: "metallomania-3490f.firebaseapp.com",
   databaseURL: "https://metallomania-3490f-default-rtdb.firebaseio.com",
   projectId: "metallomania-3490f",
   storageBucket: "metallomania-3490f.appspot.com",
   messagingSenderId: "1053572846143",
   appId: "1:1053572846143:web:64ab568084e738fb7b9e8a",
   measurementId: "G-143XC9X133"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);


import{getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js"

const db = getDatabase();

var username = document.getElementById("username");
var email = document.getElementById("email-signup");
const wallet = 50000;

function InsertData(){
  set(ref(db, "User/"+ username.value),{
    Name : username.value,
    EmailID : email.value,
    WalletAmount : wallet
  });

}

create-acct-btn.addEventListener('click', InsertData );


