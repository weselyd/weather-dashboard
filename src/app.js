const API_KEY = 'your_openweather_api_key_here'; // Replace with your actual API key

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#search-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const city = document.querySelector('#city-input').value.trim();
    if (!city) return;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error('City not found');
      }
      const weatherData = await response.json();

      // Update UI
      document.querySelector('#weather-output').innerHTML = `
        <h2>${weatherData.name}, ${weatherData.sys.country}</h2>
        <p>Temperature: ${weatherData.main.temp}°C</p>
        <p>Weather: ${weatherData.weather[0].description}</p>
      `;

    } catch (error) {
      console.error('Error fetching weather:', error);
      document.querySelector('#weather-output').innerHTML = '<p>City not found. Please try again.</p>';
    }
  });
});
