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
const showProfile = document.querySelector('.user-profile-desktop');
const profilebtn = document.querySelector('.profile');

openBtn.addEventListener('click', () => {
    navBar.classList.add('open');
})

closeBtn.addEventListener('click', () => {
    navBar.classList.remove('open');
})

home.addEventListener('click', () => {
    navBar.classList.remove('open');
})

skills.addEventListener('click', () => {
    navBar.classList.remove('open');
})

experience.addEventListener('click', () => {
    navBar.classList.remove('open');
})

education.addEventListener('click', () => {
    navBar.classList.remove('open');
})

certification.addEventListener('click', () => {
    navBar.classList.remove('open');
})

connect.addEventListener('click', () => {
    navBar.classList.remove('open');
})

if (goUpBtn) {
    goUpBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

profilebtn.addEventListener('click', () => {
    if (showProfile.style.opacity === '1') {
        showProfile.style.opacity = '0';
    } else {
        showProfile.style.opacity = '1';
    }
});


//NOTIFICATIONS
FCMPlugin.getToken(function (token) {
    console.log("FCM Token: " + token);
    // You can store this token or send it to your server for further use
}, function (err) {
    console.error("Error retrieving FCM token: " + err);
});

// Handle incoming notifications
FCMPlugin.onNotification(function (data) {
    console.log("Notification data: " + JSON.stringify(data));

    if (data.wasTapped) {
        // Notification received in background
        alert("Background Notification: " + JSON.stringify(data));
    } else {
        // Notification received in foreground
        alert("Foreground Notification: " + JSON.stringify(data));
    }
}, function (msg) {
    console.log("Notification callback success: " + msg);
}, function (err) {
    console.error("Notification callback error: " + err);
});
