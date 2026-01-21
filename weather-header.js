const city = "Tooele";
const apiKey = "0371c49fb172bd62cb4a97ace4b8a605";
const weatherURL =  `https://api.openweathermap.org/data/2.5/weather?q=tooele&units=imperial&appid=${apiKey}`;

async function getWeather() {
    try{
      let response = await fetch(weatherURL);
      let data = await response.json();
      displayCurrent(data);
    } catch (error) {
      console.error("Error", error);
      alert("error")
    }
  }
getWeather(); 

function displayCurrent(data){

    let temEle = document.getElementById('current-temp')
    let humEle = document.getElementById('current-humid')
    let windSpeedEle = document.getElementById('current-windSpeed')
    let currentDesEle = document.getElementById('current-desc')
    let windChillEle = document.getElementById('current-windChill')
    let cityEle = document.getElementById('five-city')
    let iconEle = document.getElementById('img')

    let temp = data.main.temp;
    let humidity = data.main.humidity;
    let wind = data.wind.speed;
    let currentDescription = data.weather[0].description;
    let city = data.name

    let windChill = "None";
    if (temp <= 50 && wind > 3){
      windChill = 35.74 + 0.6215
      * temp -35.75 * Math.pow(wind, 0.16) +0.4275 
      * temp * Math.pow(wind, 0.16);
    windChill = Math.round(windChill)
    }

    if (temEle) temEle.textContent = temp
    if (humEle) humEle.textContent = humidity
    if (windSpeedEle) windSpeedEle.textContent = wind 
    if (currentDesEle) currentDesEle.innerText = currentDescription
    if (windChillEle) windChillEle.textContent = windChill
    if (cityEle) cityEle.innerText = city
    if (iconEle) {
      iconEle.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      alt = "weatherImg"
    }
}

let currentDate = new Date().toLocaleDateString();
let date = document.querySelector("#updated");

date.textContent = currentDate;

let currentYear = new Date().getFullYear();
let year = document.querySelector("#year");

year.textContent = currentYear;