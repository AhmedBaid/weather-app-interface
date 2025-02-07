const apiKey = "918ad58cfa6aadd0a5c6a37958925170";
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const weatherCondition = document.getElementById("weather-condition");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const weatherInfo = document.querySelector(".weather-info");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) {
    fetchWeather(city);
    }
});

async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
        displayWeather(data);
    } else {
        alert("City not found. Please try again.");
    }
    } catch (error) {
    console.error("Error fetching weather data:", error);
    }
}

function displayWeather(data) {
    cityName.textContent = data.name;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherCondition.textContent = data.weather[0].description;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeed.textContent = `Wind: ${data.wind.speed} km/h`;
    weatherInfo.style.display = "block";
}
