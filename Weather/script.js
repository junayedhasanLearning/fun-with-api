// API key for accessing weather data
const apiKey = "21e9867ddeff4ad5bcb163453240104";

// DOM element selections
const elements = {
  temp: document.querySelector(".temp span"),
  city: document.querySelector(".cityName"),
  humidity: document.querySelector(".humi-details h4 span"),
  wind: document.querySelector(".wind-details h4 span"),
  status: document.querySelector(".lead h3 span"),
  weatherIMG: document.querySelector(".weather-img"),
  cityInput: document.querySelector(".city-input"),
  btn: document.querySelector(".src-btn"), // Button for fetching weather data
};

// Function to fetch and display weather data
async function checkWeather(url) {
  // Fetch weather data from the API
  const { current } = await (await fetch(url)).json();
  // Update DOM elements with weather data
  elements.temp.innerHTML = current.temp_c;
  elements.humidity.innerHTML = current.humidity;
  elements.wind.innerHTML = current.wind_kph;
  elements.status.innerHTML = current.condition.text;
  elements.weatherIMG.src = current.condition.icon;
}

// Event listener for fetching weather data on button click
document.addEventListener("DOMContentLoaded", () => {
  elements.btn.addEventListener("click", async () => {
    // Get the value from the input field and trim whitespace
    const cityInputValue = elements.cityInput.value.trim();
    // Check if a city name is provided
    if (cityInputValue) {
      // Update city name display
      elements.city.innerText = cityInputValue.toUpperCase();
      // Construct URL for fetching weather data based on the provided city name
      const URL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInputValue.toLowerCase()}`;
      // Fetch and display weather data
      await checkWeather(URL);
    } else {
      // Alert user to enter a city name if input is empty
      alert("Enter a city name");
    }
  });
});
