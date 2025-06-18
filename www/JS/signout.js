// Import the functions you need from Firebase SDKs
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js';
import { getAuth, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCycCmAtuuQQQFBOWmb-KxS0i-_J_MLIIc",
  authDomain: "bincom-assignments.firebaseapp.com",
  projectId: "bincom-assignments",
  storageBucket: "bincom-assignments.firebasestorage.app",
  messagingSenderId: "507802871390",
  appId: "1:507802871390:web:f54cc9a139a45a24c2f6cf",
  measurementId: "G-KXECEE2770"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);


// SIGN OUT
document.getElementById("signout-button").addEventListener("click", function (e) {
  e.preventDefault();

  signOut(auth)
  .then(() => {
  alert("Signing out...");
    document.querySelector(".signUp-form").style.display = "none";
    document.querySelector(".signIn-form").style.display = "block";
    window.location.href = "./auth.html";
  })
  .catch((error) => {
    alert(error.message);
  });
});

//AUTHENTICATION STATE CHANGES
onAuthStateChanged(auth, function (user) {
  if (user) {
    document.getElementById("user-email").textContent = user.email;
    document.querySelector(".signIn-form").style.display = "none";
    document.querySelector(".signUp-form").style.display = "none";    
  } else {
    document.getElementById("user-email").textContent = "";
    window.location.href = "./auth.html";
    document.querySelector(".signIn-form").style.display = "block";
    document.querySelector(".signUp-form").style.display = "none";
  }
});