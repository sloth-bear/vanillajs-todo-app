const USER_NAME_KEY = 'userName';
const HIDDEN_CLASS = 'hidden';

const loginForm = document.getElementById('loginForm');

function toggleLoginForm() {
    const userName = localStorage.getItem(USER_NAME_KEY);
    if (!userName) {
        loginForm.classList.remove(HIDDEN_CLASS);
        return
    }
    
    const greeting = document.getElementById('greeting');
    greeting.innerText = `${userName}님, 안녕하세요!`;
    
    loginForm.classList.add(HIDDEN_CLASS);
}

window.addEventListener('load', () => {
    toggleLoginForm();
})

loginForm.addEventListener('submit', e => {
    e.preventDefault();

    const userName = document.getElementById('userName')
    localStorage.setItem(USER_NAME_KEY, userName.value);

    toggleLoginForm();
})