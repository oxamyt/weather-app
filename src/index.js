import "./reset.css";
import "./styles.css";
import { getData } from "./api";
import { render, renderForecast } from "./render";

const btn = document.querySelector(".btn");
btn.addEventListener("click", async (event) => {
  event.preventDefault();
  const cityInput = document.querySelector("#city").value;
  const res = await getData(cityInput);
  console.log(res);
  render(res);
  renderForecast(res);
});
