// Import the functions you need from Firebase SDKs
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, setPersistence, browserLocalPersistence } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js';

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

// SET PERSISTENCE
setPersistence(auth, browserLocalPersistence)
.catch((error) => {
  console.error(error);
});

//SIGN IN FORM
document.getElementById("signin-button").addEventListener("click", function (e) {
  e.preventDefault();

  const button = this;
  const spinner = document.getElementById("spinner");
  button.disabled = true;
  spinner.style.display = "block";

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
  // Signed In
  const user = userCredential.user;
  alert("Logging In...");
  window.location.href = "./index.html";
  // Show profile section after signup
  document.getElementById("user-email").textContent = user.email;
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage);
  })
  .finally(() => {
    button.disabled = false;
    spinner.style.display = "none";
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