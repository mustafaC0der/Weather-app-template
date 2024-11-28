// Select DOM elements
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const weatherIcon = document.getElementById("weatherIcon");
const temperature = document.getElementById("temperature");
const conditions = document.getElementById("conditions");

// Event listener for search button
searchBtn.addEventListener("click", async () => {
  const city = cityInput.value.trim();
  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  try {
    const weatherData = await fetchWeather(city);
    displayWeather(weatherData);
  } catch (error) {
    alert(error.message);
  }
});

// Display weather data
function displayWeather(data) {
  cityName.textContent = `${data.name}, ${data.sys.country}`;
  temperature.textContent = `Temperature: ${data.main.temp}°C`;
  conditions.textContent = `Condition: ${data.weather[0].description}`;
  weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}
