export function showSpinner(location) {    // Show spinner while loading weather data
    const weatherOutput = document.getElementById(location);
    weatherOutput.innerHTML = `
      <div class="spinner" style="text-align:center; margin:2em;">
        <div style="display:inline-block; width:40px; height:40px; border:4px solid #ccc; border-top:4px solid #333; border-radius:50%; animation:spin 1s linear infinite;"></div>
      </div>
      <style>
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      </style>
    `;}

export const showWeather = ({ name, state, country }, weatherData) => {
  const weatherOutput = document.getElementById('weather-output');
  const temp = Math.round((weatherData.main.temp * 9) / 5 + 32);  // Convert Celsius to Fahrenheit and round to nearest integer
  weatherOutput.innerHTML = `
    <h2>${name}${state ? ', ' + state : ''}, ${country}</h2>
    <p>Temperature: <span id="weatherTemp">${temp}</span>°F</p>
    <p>Weather: <span id="weatherDesc">${weatherData.weather[0].description}</span></p>
    <br><button id="ask-ai-btn">Ask for Weather Advice</button>
  `;
};

export const showError = (message = 'Could not find that city.') => {
  document.getElementById('weather-output').innerHTML = `<p>${message}</p>`;
};

export function displayAiAdvice() {
  let adviceElem = document.getElementById('ai-weather-advice');
  if (!adviceElem) {
    adviceElem = document.createElement('div');
    adviceElem.id = 'ai-weather-advice';
    adviceElem.style.marginTop = '1em';
    const btn = document.getElementById('ask-ai-btn');
    if (btn) btn.parentNode.insertBefore(adviceElem, btn.nextSibling);
  }
  return adviceElem;
}