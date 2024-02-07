// Get data from api function
export const getData = async (location) => {
  try {
    const data = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=18a3f8efce464b4392b140617240202&q=${location}&days=3&aqi=yes&alerts=yes`,
      {
        mode: "cors",
      },
    );

    // Check if data is valid
    if (!data.ok) {
      const error = document.querySelector(".error");
      error.style.visibility = "visible";
      throw new Error("City is not found");
    }

    // Get data values
    const error = document.querySelector(".error");
    error.style.visibility = "hidden";
    const json = await data.json();
    const tempC = json.current.temp_c;
    const tempCFeels = json.current.feelslike_c;
    const { country } = json.location;
    const { name } = json.location;
    const windKm = json.current.wind_kph;
    const forecastDays = json.forecast.forecastday;
    const forecastObj = {};

    // Create weather objects
    for (let i = 0; i < forecastDays.length; i++) {
      const key = i === 0 ? "first" : i === 1 ? "second" : "third";
      const mintempC = forecastDays[i].day.mintemp_c;
      const maxtempC = forecastDays[i].day.maxtemp_c;
      const date = new Date(forecastDays[i].date).toLocaleDateString("en-EN", {
        weekday: "long",
      });
      const { icon } = forecastDays[i].day.condition;
      forecastObj[key] = { mintempC, maxtempC, icon, date };
    }
    const { icon, text } = json.current.condition;
    const obj = {
      tempC,
      tempCFeels,
      icon,
      country,
      windKm,
      name,
      text,
    };
    return { obj, forecastObj };
  } catch (err) {
    console.log(err);
  }
};
