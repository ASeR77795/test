import { request } from "./request.js";
const host = "http://swapi.dev/api/planets/";
document.addEventListener("DOMContentLoaded", () => {
  const ul = document.querySelector("ul");
  request(`${host}/1`).then(());
});
