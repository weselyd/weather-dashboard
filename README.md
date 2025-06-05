# weather-dashboard

This web application takes input from the user in the form of a city, then calls OpenWeatherMap APIs to determine which city they are expecting and returns current weather data.  Once the weather data is displayed, there is a second button that inititates a call to OpenAI to get advice on what to wear based on the current weather.

The project's files are broken out into ES6 modules:
 - app.js: imports all necessary functionality from other modules and orchestrates all operations
 - api.js: handles API calls to OpenWeatherMap
 - ai.js: handles the API call to OpenAI
 - ui.js: performs ui updates (loading indicators, errors, display of data)
 - events.js: implements event listeners for buttons and initiates actions behind them
 - index.html: core HTML markup
 - styles.css: core styling

 To deploy this app, just clone the repo and store in root directory of webserver.  Once you have that you'll need to add your API keys, one for OpenWeatherMap (stored in api.js) and the other for OpenAI (stored in ai.js).  All there is left to do then is to start the server and open index.html.


 Video walkthrough: https://youtu.be/TzoiQk2ZtqE