// On your project, when a user searches for a city (example: New York), it should display the name of the city on the result page and the current temperature of the city.
//Add a Current Location button. When clicking on it, it uses the Geolocation API to get your GPS coordinates and display and the city and current temperature using the OpenWeather API.

let apiKey = "842b36d55cb28eba74a018029d56b04c"; // apiKey for Openweather

// Suchfeld

function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#search-input");
  console.log("input.value");
  let city = document.querySelector("#city");
  city.innerHTML = `${input.value}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showInformation);
}

// function showNewCity(cityname) {}

let form = document.querySelector("#search-form");
console.log("form");

form.addEventListener("submit", searchCity);

// Temperatur für gesuchte Stadt

function showInformation(response) {
  console.log(response.data);
  console.log(response.data.main.temp); // exakte Temperatur
  console.log(response.data.coord);
  console.log(response.data.main.humidity); //Luftfeuchtigkeit
  console.log(response.data.wind.speed); //Windgeschwindigkeit
  console.log(response.data.name); //gesuchter Ort
  console.log(response.data.weather[0].description); //Beschreibung
  let temperature = Math.round(response.data.main.temp); //neue Variable mit gerundeter Temperatur
  let temperatureElement = document.querySelector("#temperature");
  let humidity = response.data.main.humidity;
  let humidityElement = document.querySelector("#humidity");
  let wind = response.data.wind.speed;
  let windElement = document.querySelector("#wind");
  let newcity = response.data.name;
  let newcityElement = document.querySelector("#city");
  let description = response.data.weather[0].description;
  let descriptionElement = document.querySelector("#sky");
  temperatureElement.innerHTML = `${temperature}`;
  humidityElement.innerHTML = `${humidity}`;
  windElement.innerHTML = `${wind}`;
  newcityElement.innerHTML = `${newcity}`;
  descriptionElement.innerHTML = `${description}`;
}

// get current Location and show information

// Geolocation
function currentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getCurrentTemp);
}

function getCurrentTemp(position) {
  let lon = position.coords.longitude;
  let lat = position.coords.latitude;
  let units = `metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showInformation);
}

let current = document.querySelector("#current-location-button");
current.addEventListener("click", currentLocation);

// function showTemperature(response) {
//   let currentlocation = document.querySelector("#city");
//   currentlocation.innerHTML = `${response.data.name}`;
// }

// datum und UHrzeit
let now = new Date();
let li = document.querySelector("#date");
console.log("date");

let date = now.getDate();
let fullYear = now.getFullYear();
let hour = now.getHours();
let minute = now.getMinutes();
let seconds = now.getSeconds();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let month = months[now.getMonth()];

li.innerHTML = `${day}, ${month} ${date}, ${fullYear}, ${hour}:${minute}:${seconds}`;

let currentDate = li.innerHTML;

function formatDate(currentDate) {
  return now;
}
