const API_KEY = 'ffd1930183f26dfd19f62f05f669a882';

function drawWeather(cityName, weather) {
    const citySpan = document.createElement('span');
    citySpan.innerText = cityName;

    const weatherSpan = document.createElement('span');
    weatherSpan.innerText = weather

    const weatherBox = document.getElementById('weather');
    weatherBox.appendChild(citySpan);
    weatherBox.appendChild(weatherSpan);
}

function setWeather() {
    if (!'geolocation' in navigator) {
        return;
    }

    const loc = navigator.geolocation.getCurrentPosition(async ({ coords }) => {
        const lat = coords.latitude;
        const lon = coords.longitude;

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

        try {
            const res = await fetch(url);
            const { name, weather } = await res.json();

            drawWeather(name, weather[0] && weather[0].main);
        } catch (error) {
            console.log(error);
            console.error('날씨 정보를 정상적으로 불러오지 못했습니다.');
        }
    })
}

setWeather();