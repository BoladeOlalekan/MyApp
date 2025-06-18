const showSignUp = document.getElementById("showSignUp");
const showSignIn = document.getElementById("showSignIn");
const signInForm = document.querySelector(".signIn-form");
const signUpForm = document.querySelector(".signUp-form");

//TOGGLE SIGN UP AND SIGN IN
showSignUp.addEventListener('click', (e) => {
    e.preventDefault();
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
});

showSignIn.addEventListener('click', (e) => {
    e.preventDefault();
    signUpForm.style.display = "none";
    signInForm.style.display = "block";
});