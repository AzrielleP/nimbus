const cityName = document.querySelector('input');

async function getWeatherData() {
  try {
    const data = await fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=' + cityName.value +'&appid=b0c97e77b0085b10b9618c2ccfbe43e8&units=metric',
      {
        mode: 'cors',
      }
    );
    const loadData = await data.json();
    console.log(loadData);
    return loadData;
  } catch (err) {
    console.error('Error getting data');
  }
}

async function processWeatherData(data) {
  try {
    const gatheredData = await data;
    const weatherData = {};

    weatherData.weatherDescription = gatheredData.weather[0].main;
    weatherData.temp = gatheredData.main.temp;
    weatherData.feelsLike = gatheredData.main.feels_like;
    weatherData.pressure = gatheredData.main.pressure;
    weatherData.humidity = gatheredData.main.humidity;
    weatherData.minTemp = gatheredData.main.temp_min;
    weatherData.maxTemp = gatheredData.main.temp_max;
    weatherData.windSpeed = gatheredData.wind.speed;
    weatherData.country = gatheredData.sys.country;
    weatherData.city = gatheredData.name;
    weatherData.sunrise = convertTimeToDate(gatheredData.sys.sunrise);
    weatherData.sunset = convertTimeToDate(gatheredData.sys.sunset);

    console.log(weatherData);
    return weatherData;
  } catch (err) {
    console.error('Error processing data');
  }
}

function convertTimeToDate(time) {
  const timeInSeconds = new Date(time * 1000);
  return timeInSeconds.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
}

cityName.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        processWeatherData(getWeatherData());
    }
})


function displayData() {}
