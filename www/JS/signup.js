// Import the functions you need from Firebase SDKs
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js';

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

//SIGN UP FORM
document.getElementById("signup-button").addEventListener("click", function (e) {
    e.preventDefault();

    const button = this;
    const spinner = document.getElementById("spinner");
    button.disabled = true;
    spinner.style.display = "block";

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    alert("Account created!");
    window.location.href = "./signin.html"
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
});


/*
// Handle user sign-out
document.getElementById("signout-button").addEventListener("click", function () {
    signOut(auth)
    .then(() => {
        window.location.href = "/www/signin.html"; // Redirect to the sign-in page
    })
    .catch((error) => {
        alert(error.message);
    });
});

// Listen for authentication state changes
onAuthStateChanged(auth, function (user) {
    if (user && user.emailVerified) {
        document.getElementById("user-email").textContent = user.email;
        document.getElementById("signup-form").style.display = "none";
        document.getElementById("signin-form").style.display = "none";

    } else {
        document.getElementById("signup-form").style.display = "none";
        document.getElementById("signin-form").style.display = "none";
        document.getElementById("user-profile").style.display = "none";

    }
});
*/