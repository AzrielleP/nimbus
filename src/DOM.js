const dom = (() => {
    
    // Get HTML Elements
    
    const cityAndCountry = document.querySelector('.cityAndCountry');
    const weatherStatusIcon = document.querySelector('#weatherStatusIcon');
    const weatherTemp = document.querySelector('.weatherTemp');
    const feelsLikeTemp = document.querySelector('.feelsLikeTemp');
    const weatherDescription = document.querySelector('.weatherDescription');

    const sunriseTime = document.querySelector('.sunriseTime');
    const sunsetTime = document.querySelector('.sunsetTime');
    const humidity = document.querySelector('.humidityValue');
    const windSpeed = document.querySelector('.windSpeedValue');
    const pressure = document.querySelector('.pressureValue');

    const assignWeatherIcon = (id) => {
        let iconName = null;
        id.toString();
        if (/^2/.test(id)) iconName = 'pe-7w-light pe-5x';
        else if (/^3/.test(id)) iconName = 'pe-7w-drizzle pe-5x';
        else if (/^5/.test(id)) iconName = 'pe-7w-rain-alt pe-5x';
        else if (/^7/.test(id)) iconName = 'pe-7w-fog pe-5x';
        else if (id === 800) iconName = 'pe-7w-sun pe-5x';
        else if (/^80/.test(id)) iconName = 'pe-7w-cloud pe-5x';
        return iconName;
    }
    const displayData = async (weatherData) => {
        const data = await weatherData;
        cityAndCountry.textContent = `${data.city}, ${data.country}`;
        weatherDescription.textContent = data.weatherDescription;
        weatherTemp.textContent = `${data.temp}\u00B0`;
        feelsLikeTemp.textContent = `Feels like ${data.feelsLike}\u00B0`;
        sunriseTime.textContent = data.sunrise;
        sunsetTime.textContent = data.sunset;
        humidity.textContent = `${data.humidity}%`;
        windSpeed.textContent = `${data.windSpeed} kph`;
        pressure.textContent = `${data.pressure} hPa`;
        weatherStatusIcon.className = assignWeatherIcon(data.id);
    }

    return {
        displayData,
    }
})();

export { dom };

