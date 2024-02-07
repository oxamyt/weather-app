import "./reset.css";
import "./styles.css";
import { getData } from "./api";
import { render, renderForecast } from "./render";

const btn = document.querySelector(".btn");
btn.addEventListener("click", async (event) => {
  event.preventDefault();
  const cityInput = document.querySelector("#city").value;
  if (cityInput) {
    try {
      const res = await getData(cityInput);
      render(res);
      renderForecast(res);
    } catch (err) {
      console.log(err);
    }
  }
});
