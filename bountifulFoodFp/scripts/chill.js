const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const windSpeed = document.querySelector('.speed');
const captionDesc = document.querySelector('figcaption');
//const getwindChill = document.querySelector('.chill');

// const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=31a6ffddbf95f97b503e94dbfa753530';
const apiKey = '31a6ffddbf95f97b503e94dbfa753530';
const lat = '33.158092';
const lon = '-117.350594';
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

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
    function displayResults(data) {
        let html = '';
        let count = 0;
    
        data.list.forEach(weatherData => {
            if (count >= 3) {
                return;
            }
            const temperature = weatherData.main.temp.toFixed(0);
            const windSpeed = weatherData.wind.speed;
            const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
            const humidity = weatherData.main.humidity;
            const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
            const description = weatherData.weather[0].description;

            html += `<tr><td><img src="${iconsrc}" alt="" id="weather-icon" /></td>`;
            html += '<td>' + windSpeed + '</td>';
            html += '<td>' + windChill.toFixed(2) + '</td>';
            html += '<td>' + humidity + '</td>';
            html += '<td>' + description + '</td>';
            html += '</tr>';

            count++;
        });

        document.querySelector('#forecast>tbody').innerHTML = html;
    }
}
  apiFetch();