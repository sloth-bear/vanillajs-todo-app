const images = ['1.jpg', '2.jpg', '3.jpg'];

function setBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = `images/${images[randomIndex]}`;
    
    const container = document.querySelector(".container");
    container.style.backgroundImage = `url(${randomImage})`;
}

window.addEventListener('load', () => {
    setBackgroundImage();

    if (!isLoggedIn()) {
        activateLogin();
        return;
    }

    disableLogin();
    greeting(fetchUserName());

    setClockInterval();

    drawTodoList();
    activateTodoList();
    setWeather();
});

loginForm.addEventListener('submit', e => {
    e.preventDefault();    

    handleLogin();

    setClockInterval();

    drawTodoList();
    activateTodoList();
    setWeather();
});