import { dom } from './DOM';

const getData = (() => {
  const cityName = document.querySelector('input');
  const farenheit = document.querySelector('.checkImperial');
  const farenheitToggler = document.querySelector('#toggleImperial');

  const getWeatherData = async (city, unit) => {
    try {
      const data = await fetch(
        'http://api.openweathermap.org/data/2.5/weather?q=' +
          city.value +
          '&appid=b0c97e77b0085b10b9618c2ccfbe43e8&units=' + unit,
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
  };

  const processWeatherData = async (data) => {
    try {
      const gatheredData = await data;
      const weatherData = {};

      weatherData.weatherDescription = gatheredData.weather[0].main;
      weatherData.temp = Math.round(gatheredData.main.temp);
      weatherData.feelsLike = Math.round(gatheredData.main.feels_like);
      weatherData.pressure = gatheredData.main.pressure;
      weatherData.humidity = gatheredData.main.humidity;
      weatherData.minTemp = Math.round(gatheredData.main.temp_min);
      weatherData.maxTemp = Math.round(gatheredData.main.temp_max);
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
  };

  const convertTimeToDate = (time) => {
    const timeInSeconds = new Date(time * 1000);
    return timeInSeconds.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getUserInputUnit = () => {
      let unit = null;
      farenheit.addEventListener('click', () => {
        if (farenheitToggler.checked) {
            unit = 'imperial';
            dom.changeToFarenheit();
            
        }
        else {
            unit = 'metric';
            dom.changeToCelsius();
        }
        let weatherData = processWeatherData(getWeatherData(cityName, unit));
        dom.displayData(weatherData);
      })
      return unit;
  }

  const getUserInputCity = () => {
    cityName.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        let weatherData = processWeatherData(getWeatherData(cityName, 'metric'));
        cityName.value = '';
        dom.displayData(weatherData);
      }
    });
  };

  return {
    getUserInputCity,
    getUserInputUnit
  };
})();

export default getData;
