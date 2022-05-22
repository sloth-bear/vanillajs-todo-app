const loginBox = document.querySelector('.login-form');
const loginForm = document.getElementById('loginForm');
const greetingBox = document.querySelector('.greeting');

function fetchUserName() {
    return localStorage.getItem('userName');
}

function saveUserName() {
    const input = document.getElementById('userName');
    const userName = input.value;
    localStorage.setItem('userName', userName);

    input.value = "";
}

function isLoggedIn() {
    return !!fetchUserName();
}

function activateLogin() {
    loginBox.classList.remove('hidden');
}

function disableLogin() {
    loginBox.classList.add('hidden');
}

function greeting(userName) {
    const msg = `<h1>Welcome, ${userName}</h1>`;
    greetingBox.innerHTML = msg;
    greetingBox.classList.remove('hidden');
}

function handleLogin() {
    saveUserName();
    disableLogin();
    greeting(fetchUserName());
}