// Import the functions you need from Firebase SDKs
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, setPersistence, browserLocalPersistence } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js';

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
    window.location.href = "./index.html"
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    })
    .finally(() => {
        button.disabled = false;
        spinner.style.display = "none";
    });

    // Show profile section after signup
    document.getElementById("user-email").textContent = user.email;
});

// SIGN OUT
document.getElementById("signout-button").addEventListener("click", function (e) {
    e.preventDefault();

    signOut(auth)
    .then(() => {
    alert("Signing out...")
    window.location.href = "./signin.html";
    })
    .catch((error) => {
    alert(error.message);
    });
});

//AUTHENTICATION STATE CHANGES
onAuthStateChanged(auth, function (user) {
  if (user) {
    document.getElementById("user-profile-desktop").style.display = "block";
    document.getElementById("user-profile-mobile").style.display = "block";
    document.getElementById("user-email").textContent = user.email;
    document.getElementsByClassName("sign").style.display = "none";
    
  } else {
    document.getElementsByClassName("sign").style.display = "none";
    document.getElementById("user-profile-desktop").style.display = "none";
    document.getElementById("user-profile-mobile").style.display = "none";
    document.getElementById("user-email").textContent = "";
    window.location.href = "./signin.html";
  }
});

// PERSISTENCE
setPersistence(auth, browserLocalPersistence)
.then(() => {
// Now sign in as usual
return signInWithEmailAndPassword(auth, email, password);
})
.catch((error) => {
// Handle Errors here.
console.error(error);
});
