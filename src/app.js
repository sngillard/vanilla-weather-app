function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
}

let apiKey = "d39dbaacbf9289ab2454aa17a19d8eb5";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=boston&units=metric&appid=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);
