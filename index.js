const apiKey = 'f0293a4737f0952b73dc3526f02e535c';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${apiKey}`;

const onEnterHandler = e => {
    if (e.keyCode === 13) {
        console.log(e);
        getWeather(searchCity.value);
    }
    // console.log(e);
}

const handleWeather = value => {
    const city = document.querySelector('.city');
    const date = document.querySelector('.date');
    const temp = document.querySelector('.temp');
    const weather = document.querySelector('.weather');
    const hiLow = document.querySelector('.hi-low');
    console.log(value);
    city.innerText = `${value.name},${value.sys.country}`
    temp.innerText = `${Math.floor(value.main.temp)}°c`;
    weather.innerText = value.weather[0].main;
    hiLow.innerText = `${Math.floor(value.main.temp_min)}°c / ${Math.floor(value.main.temp_max)}°c`;
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    date.innerText = mm + '/' + dd + '/' + yyyy;

}

const searchCity = document.querySelector('.search-box');
console.log(searchCity);
searchCity.addEventListener('keypress', onEnterHandler);



const getWeather = city => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&&APPID=${apiKey}`).then(response => response.json()).then(response = handleWeather);
}
