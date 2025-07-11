import { owDirectGeocode, owGetCurrentWeather } from './modules/api.js';
import { displayAiAdvice, showWeather, showError, showSpinner } from './modules/ui.js';
import { citySearch, aiButton } from './modules/events.js';
import { callOpenAI } from './modules/ai.js';


document.addEventListener('DOMContentLoaded', () => {
  
  citySearch(async (city) => {
    if (!city) return;
    showSpinner('weather-output'); // Show spinner while loading weather data
    try {
      const location = await owDirectGeocode(city);  // Get city location data from OpenWeatherMap
      const weatherData = await owGetCurrentWeather(location.lat, location.lon);  // Use location data to get weather data

      showWeather(location, weatherData);  // Display weather data on the page
      aiButton(async (prompt) => {  // Set up AI button to fetch advice based on weather data
        if (!prompt) return;
        const adviceElem = displayAiAdvice();  // Create section for AI advice if it doesn't exist
        showSpinner('ai-weather-advice');  // Show spinner while loading AI response

        try {
          const aiReponse = await callOpenAI(prompt);  // Call OpenAI API with the prompt
          adviceElem.textContent = aiReponse.output?.[0]?.content?.[0]?.text?.trim() || "No advice received.";
        } catch (error) {  // Handle any errors from the OpenAI API call, log to console, and display a user-friendly message
          console.error('Error fetching AI advice:', error);
          adviceElem.textContent = "Could not get advice from OpenAI";
        }
      });
    } catch (error) {  // Handle any errors from the OpenWeatherMap API calls, log to console, and display a user-friendly message
      console.error('Error fetching weather:', error);
      showError();
    }
  });
})