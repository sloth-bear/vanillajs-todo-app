const clock = document.querySelector('.clock');

function padZero2Length(value) {
    return String(value).padStart(2, "0");
}

function setClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    clock.innerHTML = `<h1>${padZero2Length(hours)}:${padZero2Length(minutes)}</h1>`;
}

function setClockInterval() {
    setClock();
    setInterval(setClock, 1000);
}