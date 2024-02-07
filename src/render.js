export const render = async function (res) {
  const weatherCard = document.querySelector(".weather-card");
  weatherCard.innerHTML = "";
  const weatherCountry = document.createElement("h1");
  weatherCountry.innerText = res.obj.country;
  const weatherIcon = document.createElement("img");
  weatherIcon.src = res.obj.icon;
  const weatherCity = document.createElement("h2");
  weatherCity.innerText = res.obj.name;
  const weatherTemp = document.createElement("h3");
  weatherTemp.innerText = res.obj.tempC;
  const weatherTempFeels = document.createElement("h4");
  weatherTempFeels.innerText = res.obj.tempCFeels;
  const weatherText = document.createElement("h4");
  weatherText.innerText = res.obj.text;
  const weatherWind = document.createElement("h4");
  weatherWind.innerText = res.obj.windKm;
  weatherCard.append(
    weatherCountry,
    weatherIcon,
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
    const forecastMaxTemp = document.createElement("h1");
    forecastMaxTemp.innerText = `Max temperature: ${day.maxtempC}`;
    const forecastMinTemp = document.createElement("h1");
    forecastMinTemp.innerText = `Min temperature: ${day.mintempC}`;
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
