const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const windSpeed = document.querySelector('.speed');
const captionDesc = document.querySelector('figcaption');
//const getwindChill = document.querySelector('.chill');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=31a6ffddbf95f97b503e94dbfa753530';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
    function displayResults(weatherData) {
        currentTemp.innerHTML = weatherData.main.temp.toFixed(0);
        windSpeed.innerHTML = weatherData.wind.speed;
        
        const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
        const desc = weatherData.weather[0].description;
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.innerHTML = desc;
    }

  const getWindChill = document.querySelector('.chill');
  const temperature = currentTemp; // Replace with the actual air temperature in Fahrenheit
  const windChill = windSpeed; // Replace with the actual wind speed in miles per hour
  const windChillT = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windChill, 0.16) + 0.4275 * temperature * Math.pow(windChill, 0.16);

  
    if (temperature <= 50 && windChill > 3) {
        getWindChill.innerHTML =  windChillT;
      } 
      else {
        getWindChill.innerHTML =  'N/A';
      }   
  }

  
  
  apiFetch();

  //getWindChill.innerHTML = calculateWindChill;

  
  // Usage example:
  
  //const windChill = calculateWindChill(currentTemp, windSpeed);
  //getWindChill.innerHTML("Wind Chill:", windChill.toFixed(2) + "°F");


  //function displayWeatherData(data) {
    //const iconURL = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  
    //let temp = data.main.temp;
    //let speed = data.wind.speed;
  
    //document.getElementById('cityName').textContent = data.name;
    //document.getElementById('weatherIcon').setAttribute('src', iconURL);
    //document.getElementById('weatherIcon').setAttribute('alt', data.weather[0].description);
    //document.querySelector('.temp').innerHTML = `Temperature: ${temp} &deg;F`;
    //document.querySelector('.wind-speed').textContent = `Wind Speed: ${speed} mph`;
    //document.querySelector('.humidityDiv').textContent = `Humidity: ${data.main.humidity}`;