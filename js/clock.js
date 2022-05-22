const clock = document.querySelector('.clock');

function setClock() {
    const now = new Date();
    clock.innerHTML = `<h1>${now.getMonth()}.${now.getDate()} ${now.getHours()}:${now.getMinutes()}</h1>`;
}

function setClockInterval() {
    setClock();
    setInterval(setClock, 1000);
}