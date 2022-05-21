const clock = document.getElementById('clock');

function setClock() {
    const now = new Date();
    now.getFullYear();

    clock.innerText = `${now.getFullYear()}년 ${now.getMonth()}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초`;
}

setClock();
setInterval(setClock, 1000);