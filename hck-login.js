const container = document.getElementById('container');
const registerBtn = document.getElementById('register-btn');
const loginBtn = document.getElementById('login-btn');

// Toggle between Sign-Up and Sign-In
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});
loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Valid credentials for demo
const valid = {
    username: 'user',
    password: 'password123'
};

// Form validation for Sign-Up
document.getElementById('signup-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phoneNumber').value;
    const password = document.getElementById('signup-password').value;

    if (firstname && lastname && email && phone.match(/^\d{10}$/) && password.length >= 6) {
        alert('Account created successfully!');
    } else {
        document.getElementById('signup-feedback').style.display = 'block';
    }
});

// Form validation for Sign-In
document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const feedback = document.getElementById('login-feedback');
    if (username === valid.username && password === valid.password) {
        window.location.href = 'HCK.html';
    } else {
        feedback.style.display = 'block';
    }
});
