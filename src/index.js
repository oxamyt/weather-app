import "./styles.css";
import { getData } from "./api";

const res = await getData("Kharkiv");

console.log(res);
