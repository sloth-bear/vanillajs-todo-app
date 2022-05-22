const images = ['https://user-images.githubusercontent.com/62458327/169697807-b4f2be90-eb8a-4cf2-bfcb-d797afc2f2a8.JPG', 'https://user-images.githubusercontent.com/62458327/169697814-c06e27ef-123c-4aa3-a238-a9606733f5e5.JPG', 'https://user-images.githubusercontent.com/62458327/169697817-6235a176-027d-4c1b-8a54-a64255dd883f.JPG'];

function setBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const container = document.querySelector(".container");
    container.style.backgroundImage = `url(${images[randomIndex]})`;
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