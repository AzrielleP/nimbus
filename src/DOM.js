const dom = (() => {
    
    // Get HTML Elements
    const farenheit = document.querySelector('.checkImperial');
    
    const cityAndCountry = document.querySelector('.cityAndCountry');
    const weatherStatusIcon = document.querySelector('#weatherStatusIcon');
    const weatherTemp = document.querySelector('.weatherTemp');
    const minAndMaxTemp = document.querySelector('.minAndMaxTemp');
    const feelsLikeTemp = document.querySelector('.feelsLikeTemp');
    const weatherDescription = document.querySelector('.weatherDescription');

    const sunriseTime = document.querySelector('.sunriseTime');
    const sunsetTime = document.querySelector('.sunsetTime');
    const humidity = document.querySelector('.humidityValue');
    const windSpeed = document.querySelector('.windSpeedValue');
    const pressure = document.querySelector('.pressureValue');

    const displayData = async (weatherData) => {
        const data = await weatherData;
        cityAndCountry.textContent = `${data.city}, ${data.country}`;
        weatherDescription.textContent = data.weatherDescription;
        weatherTemp.textContent = `${data.temp}\u00B0`;
        minAndMaxTemp.textContent = `${data.minTemp}\u00B0 | ${data.maxTemp}\u00B0`;
        feelsLikeTemp.textContent = `Feels like ${data.feelsLike}\u00B0`;
        sunriseTime.textContent = data.sunrise;
        sunsetTime.textContent = data.sunset;
        humidity.textContent = `${data.humidity}%`;
        windSpeed.textContent = `${data.windSpeed} kph`;
        pressure.textContent = `${data.pressure} hPa`;
    }

    const changeToFarenheit = () => {
        farenheit.style.fontWeight = 'bolder';
        farenheit.style.color = '#d62828';
        farenheit.style.opacity = '1';
    }

    const changeToCelsius = () => {
        farenheit.style.fontWeight = 'lighter';
        farenheit.style.color = '#eae2b7';
        farenheit.style.opacity = '0.6';
    }

    return {
        displayData,
        changeToFarenheit,
        changeToCelsius,
    }

})();

export { dom };

