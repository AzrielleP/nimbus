/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
import dom from './DOM';

const getData = (() => {
  const cityName = document.querySelector('input');

  // Get the data from the API
  const getWeatherData = async (city, unit) => {
    try {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          city
        }&appid=b0c97e77b0085b10b9618c2ccfbe43e8&units=${
          unit}`,
        {
          mode: 'cors',
        },
      );
      const loadData = await data.json();
      return loadData;
    } catch (err) {
      dom.displayErrorLocation();
    }
  };

  // The default time from the API is in ms. Convert it to a readable time (e.g. 7:20 AM)
  const convertTimeToDate = (time) => {
    const timeInSeconds = new Date(time * 1000);
    return timeInSeconds.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Filter out the data that we only need from the API
  const processWeatherData = async (data) => {
    try {
      const gatheredData = await data;
      const weatherData = {};

      weatherData.id = gatheredData.weather[0].id;
      weatherData.weatherDescription = gatheredData.weather[0].description;
      weatherData.temp = Math.round(gatheredData.main.temp);
      weatherData.feelsLike = Math.round(gatheredData.main.feels_like);
      weatherData.pressure = gatheredData.main.pressure;
      weatherData.humidity = gatheredData.main.humidity;
      weatherData.windSpeed = gatheredData.wind.speed;
      weatherData.country = gatheredData.sys.country;
      weatherData.city = gatheredData.name;
      weatherData.sunrise = convertTimeToDate(gatheredData.sys.sunrise);
      weatherData.sunset = convertTimeToDate(gatheredData.sys.sunset);
      return weatherData;
    } catch (err) {
      dom.displayErrorLocation();
    }
  };

  // When the webpage loads, use this City to be displayed.
  const onLoad = () => {
    const weatherData = processWeatherData(
      getWeatherData('Baguio City', 'metric')
    );
    dom.displayData(weatherData);
  };

  const getUserInputCity = () => {
    cityName.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const weatherData = processWeatherData(
          getWeatherData(cityName.value, 'metric')
        );
        cityName.value = '';
        dom.hideErrorMessage();
        dom.displayData(weatherData);
      }
    });
  };

  return {
    onLoad,
    getUserInputCity,
  };
})();

export default getData;
