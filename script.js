const userInput = document.getElementById("cityName");
const city = document.getElementById("city");
const desc = document.getElementById("desc");
const temp = document.getElementById("temp");
const wind = document.getElementById("wind");
const apiKey = '8a15c47a0d73f5e5f19de0b377e3cb04';

function getWhetherData() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + userInput.value + '&appid=' + apiKey)
        .then(res => res.json())
        .then(data => {
            city.innerHTML = `Weather of <span>${data['name']}<span>`;
            desc.innerHTML = `Despcription : <span>${data['weather']['0']['description']}<span>`;
            temp.innerHTML = `Temperature is <span>${(data['main']['temp'] - 273).toFixed(2)}<span>`;
            wind.innerHTML = `Wind Speed is  <span>${data['wind']['speed']}<span>`;
        })
        .catch(err => { alert("Please Check City Name") });
}