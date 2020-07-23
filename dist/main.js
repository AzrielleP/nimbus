!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=(()=>{const e=document.querySelector(".errorMessage"),t=document.querySelector(".cityAndCountry"),n=document.querySelector("#weatherStatusIcon"),r=document.querySelector(".weatherTemp"),o=document.querySelector(".feelsLikeTemp"),i=document.querySelector(".weatherDescription"),u=document.querySelector(".sunriseTime"),a=document.querySelector(".sunsetTime"),s=document.querySelector(".humidityValue"),c=document.querySelector(".windSpeedValue"),d=document.querySelector(".pressureValue");return{displayData:async l=>{try{const e=await l;t.textContent=`${e.city}, ${e.country}`,i.textContent=e.weatherDescription,r.textContent=e.temp+"°",o.textContent=`Feels like ${e.feelsLike}°`,u.textContent=e.sunrise,a.textContent=e.sunset,s.textContent=e.humidity+"%",c.textContent=e.windSpeed+" kph",d.textContent=e.pressure+" hPa",n.className=(e=>{let t=null;return e.toString(),/^2/.test(e)?t="pe-7w-light pe-5x":/^3/.test(e)?t="pe-7w-drizzle pe-5x":/^5/.test(e)?t="pe-7w-rain-alt pe-5x":/^7/.test(e)?t="pe-7w-fog pe-5x":800===e?t="pe-7w-sun pe-5x":/^80/.test(e)&&(t="pe-7w-cloud pe-5x"),t})(e.id)}catch(t){e.style.display="block",e.textContent="Oops! There was an error loading the data. Try again."}},displayErrorLocation:()=>{e.style.display="block",e.textContent="Location not found."},hideErrorMessage:()=>{e.style.display="none"}}})();var o=(()=>{const e=document.querySelector("input"),t=async(e,t)=>{try{const n=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=b0c97e77b0085b10b9618c2ccfbe43e8&units=${t}`,{mode:"cors"});return await n.json()}catch(e){r.displayErrorLocation()}},n=e=>new Date(1e3*e).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),o=async e=>{try{const t=await e,r={};return r.id=t.weather[0].id,r.weatherDescription=t.weather[0].description,r.temp=Math.round(t.main.temp),r.feelsLike=Math.round(t.main.feels_like),r.pressure=t.main.pressure,r.humidity=t.main.humidity,r.windSpeed=t.wind.speed,r.country=t.sys.country,r.city=t.name,r.sunrise=n(t.sys.sunrise),r.sunset=n(t.sys.sunset),r}catch(e){r.displayErrorLocation()}};return{onLoad:()=>{const e=o(t("Baguio City","metric"));r.displayData(e)},getUserInputCity:()=>{e.addEventListener("keydown",n=>{if("Enter"===n.key){const n=o(t(e.value,"metric"));e.value="",r.hideErrorMessage(),r.displayData(n)}})}}})();o.getUserInputCity(),window.onload=o.onLoad()}]);