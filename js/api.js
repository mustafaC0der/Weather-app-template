// Fetch weather data from a local JSON file
async function fetchWeather(city) {
    const response = await fetch("weather.json");
    const data = await response.json();
    return data;
  }
  