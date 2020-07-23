!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=(()=>{const e=document.querySelector(".errorMessage"),t=document.querySelector(".cityAndCountry"),n=document.querySelector("#weatherStatusIcon"),r=document.querySelector(".weatherTemp"),o=document.querySelector(".feelsLikeTemp"),i=document.querySelector(".weatherDescription"),u=document.querySelector(".sunriseTime"),s=document.querySelector(".sunsetTime"),c=document.querySelector(".humidityValue"),a=document.querySelector(".windSpeedValue"),l=document.querySelector(".pressureValue");return{displayData:async e=>{const d=await e;t.textContent=`${d.city}, ${d.country}`,i.textContent=d.weatherDescription,r.textContent=d.temp+"°",o.textContent=`Feels like ${d.feelsLike}°`,u.textContent=d.sunrise,s.textContent=d.sunset,c.textContent=d.humidity+"%",a.textContent=d.windSpeed+" kph",l.textContent=d.pressure+" hPa",n.className=(e=>{let t=null;return e.toString(),/^2/.test(e)?t="pe-7w-light pe-5x":/^3/.test(e)?t="pe-7w-drizzle pe-5x":/^5/.test(e)?t="pe-7w-rain-alt pe-5x":/^7/.test(e)?t="pe-7w-fog pe-5x":800===e?t="pe-7w-sun pe-5x":/^80/.test(e)&&(t="pe-7w-cloud pe-5x"),t})(d.id)},displayErrorLocation:()=>{e.style.display="block",e.textContent="Location not found."},hideErrorMessage:()=>{e.style.display="none"}}})();(()=>{const e=document.querySelector("input"),t=e=>new Date(1e3*e).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return{getUserInputCity:()=>{e.addEventListener("keydown",n=>{if("Enter"===n.key){let n=(async e=>{try{const n=await e,r={};return r.id=n.weather[0].id,r.weatherDescription=n.weather[0].description,r.temp=Math.round(n.main.temp),r.feelsLike=Math.round(n.main.feels_like),r.pressure=n.main.pressure,r.humidity=n.main.humidity,r.windSpeed=n.wind.speed,r.country=n.sys.country,r.city=n.name,r.sunrise=t(n.sys.sunrise),r.sunset=t(n.sys.sunset),console.log(r),r}catch(e){r.displayErrorLocation()}})((async(e,t)=>{try{const n=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+e+"&appid=b0c97e77b0085b10b9618c2ccfbe43e8&units="+t,{mode:"cors"}),r=await n.json();return console.log(r),r}catch(e){r.displayErrorLocation()}})(e.value,"metric"));r.hideErrorMessage(),r.displayData(n)}})}}})().getUserInputCity()}]);