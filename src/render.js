export const render = async function (res) {
  const weatherSection = document.querySelector(".weather-section");
  weatherSection.innerHTML = "";
  const weatherCard = document.createElement("div");
  weatherCard.classList.add("weather-card");
  const weatherCountry = document.createElement("h1");
  weatherCountry.classList.add("country");
  weatherCountry.innerText = res.obj.country;
  const weatherIcon = document.createElement("img");
  weatherIcon.src = res.obj.icon;
  const weatherCity = document.createElement("h2");
  weatherCity.innerText = res.obj.name;
  const weatherTemp = document.createElement("h2");
  weatherTemp.innerText = `Temperature: ${res.obj.tempC}°C`;
  const weatherTempFeels = document.createElement("h2");
  weatherTempFeels.innerText = `Temperature feels like: ${res.obj.tempCFeels}°C`;
  const weatherText = document.createElement("h2");
  weatherText.innerText = res.obj.text;
  const weatherWind = document.createElement("h2");
  weatherWind.innerText = `Wind ${res.obj.windKm}km/h`;
  weatherSection.append(weatherCard);
  weatherCard.append(
    weatherIcon,
    weatherCountry,
    weatherCity,
    weatherTemp,
    weatherTempFeels,
    weatherText,
    weatherWind,
  );
};

export const renderForecast = async function (res) {
  const forecast = Object.values(res.forecastObj);
  const forecastSection = document.querySelector(".forecast-section");
  forecastSection.innerHTML = "";
  for (let day of forecast) {
    const forecastCard = document.createElement("div");
    forecastCard.classList.add("forecast-card");
    const forecastIcon = document.createElement("img");
    forecastIcon.src = day.icon;
    const forecastMaxTemp = document.createElement("h2");
    forecastMaxTemp.innerText = `Max temperature: ${day.maxtempC}°C`;
    const forecastMinTemp = document.createElement("h2");
    forecastMinTemp.innerText = `Min temperature: ${day.mintempC}°C`;
    const forecastDate = document.createElement("h1");
    forecastDate.innerText = `${day.date}`;
    forecastSection.appendChild(forecastCard);
    forecastCard.append(
      forecastIcon,
      forecastMaxTemp,
      forecastMinTemp,
      forecastDate,
    );
  }
};
