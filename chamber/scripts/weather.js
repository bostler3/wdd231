// London, England
const lat = 51.50973
const lon = -0.12976
const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const currentDesc = document.querySelector('#current-desc');
const highTemp = document.querySelector('#high-temp');
const lowTemp = document.querySelector('#low-temp');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');
const forecastToday = document.querySelector('#forecast-today');
const forecastTomorrow = document.querySelector('#forecast-tomorrow');
const forecastTwoDays = document.querySelector('#forecast-two-days');
const api = '12d6a85d455a2713834afa4532c3c298';
const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${api}`;
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${api}`;

async function apiFetchCurrent() {
    try {
        const responseCurrent = await fetch(urlCurrent);
        if (responseCurrent.ok) {
            const dataCurrent = await responseCurrent.json();
            // console.log(dataCurrent);
            displayResultsCurrent(dataCurrent);
        } else {
            throw Error(await responseCurrent.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function apiFetchForecast() {
    try {
        const responseForecast = await fetch(urlForecast);
        if (responseForecast.ok) {
            const dataForecast = await responseForecast.json();
            // console.log(dataForecast);
            displayResultsForecast(dataForecast);
        } else {
            throw Error(await responseForecast.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetchCurrent();
apiFetchForecast()

function displayResultsCurrent(dataCurrent) {
    const iconsrc = `https://openweathermap.org/img/wn/${dataCurrent.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    let desc = dataCurrent.weather[0].description;
    weatherIcon.setAttribute('alt', desc);
    currentTemp.innerHTML = `<b>${Math.round(dataCurrent.main.temp)}&deg;</b> F`;
    
    // Got help on capitalizing the first letter of each word in the description from a Bing search for "capitalize first letter of word javascript"
    let descWords = desc.split(" ");
    let descDisplay = descWords.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
    currentDesc.textContent = `${descDisplay}`;

    highTemp.innerHTML = `High: ${Math.round(dataCurrent.main.temp_max)}&deg; F`;
    lowTemp.innerHTML = `Low: ${Math.round(dataCurrent.main.temp_min)}&deg; F`;
    humidity.textContent = `Humidity: ${Math.round(dataCurrent.main.humidity)}%`;
    
    const unixSunrise = dataCurrent.sys.sunrise;
    const unixSunset = dataCurrent.sys.sunset;
    const sunriseDisplay = convertUnixTime(unixSunrise);
    const sunsetDisplay = convertUnixTime(unixSunset);
    sunrise.textContent = `Sunrise: ${sunriseDisplay} a.m.`;
    sunset.textContent = `Sunset: ${sunsetDisplay} p.m.`;
}

// API call for forecast data provides five days' worth of forecasted data; each day has three-hour increments; the indices used here correspond to 6:00 p.m. for each day
function displayResultsForecast(dataForecast) {
    forecastToday.innerHTML = `Today: <b>${Math.round(dataForecast.list[6].main.temp_max)}&deg; F</b>`;
    forecastTomorrow.innerHTML = `${convertUnixToDayOfWeek(dataForecast.list[13].dt)}: <b>${Math.round(dataForecast.list[13].main.temp_max)}&deg; F</b>`;
    forecastTwoDays.innerHTML = `${convertUnixToDayOfWeek(dataForecast.list[21].dt)}: <b>${Math.round(dataForecast.list[21].main.temp_max)}&deg; F</b>`;
}

function convertUnixTime(unixNumber) {
    const dateTime = new Date(unixNumber * 1000);
    const utcDateTime = dateTime.toUTCString();
    const words = utcDateTime.split(" ");
    const hourMinute = words[words.length - 2];
    const hourMinuteSplit = hourMinute.split(":");
    const hourCharacters = hourMinuteSplit[0];
    if (parseInt(hourCharacters) > 12) {
        sunriseHour = parseInt(hourCharacters) - 12;
    } else {
        const splitSunriseHour = hourCharacters.split("");
        sunriseHour = splitSunriseHour[1];
    }
    const sunriseMinute = hourMinuteSplit[1];
    return `${sunriseHour}:${sunriseMinute}`;
}

function convertUnixToDayOfWeek(unixNumber1) {
    const unixDateTime = new Date(unixNumber1 * 1000);
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[unixDateTime.getDay()];
    return dayOfWeek;
}