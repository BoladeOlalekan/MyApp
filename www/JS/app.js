const openBtn = document.querySelector('.hamburger-open');
const closeBtn = document.querySelector('.hamburger-close');
const navBar = document.querySelector('nav');
const home = document.querySelector('.top-li');
const skills = document.querySelector('.skills');
const experience = document.querySelector('.experience');
const education = document.querySelector('.education');
const certification = document.querySelector('.certification');
const connect = document.querySelector('.connect');
const goUpBtn = document.querySelector('.go-up a');

openBtn.addEventListener('click' , () => {
    navBar.classList.add('open');
})

closeBtn.addEventListener('click' , () => {
    navBar.classList.remove('open');
})

home.addEventListener('click' , () => {
    navBar.classList.remove('open');
})

skills.addEventListener('click' , () => {
    navBar.classList.remove('open');
})

experience.addEventListener('click' , () => {
    navBar.classList.remove('open');
})

education.addEventListener('click' , () => {
    navBar.classList.remove('open');
})

certification.addEventListener('click' , () => {
    navBar.classList.remove('open');
})

connect.addEventListener('click' , () => {
    navBar.classList.remove('open');
})

if (goUpBtn) {
    goUpBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
