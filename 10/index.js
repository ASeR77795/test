import { spinner, card } from "./spinner.js";
const name = document.querySelector(".card__name");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
let plannetId = 1;

const updatePlanet = () => {
  card.hide();
  spinner.show();
  const requestUrl = `https://swapi.dev/api/planets/${plannetId}/`;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", requestUrl);
  xhr.send();
  xhr.onload = () => {
    const { name } = JSON.parse(xhr.response);
    card.name = name;
    card.show();
    spinner.hide();
  };
};

const updateBtnState = () => {
  if (plannetId === 1) {
    prevBtn.disabled = true;
    return;
  }
  if (plannetId === 10) {
    nextBtn.disabled = true;
    return;
  }
  nextBtn.disabled = false;

  prevBtn.disabled = false;
};
updatePlanet();
updateBtnState();
prevBtn.onclick = () => {
  plannetId -= 1;
  updateBtnState();
  updatePlanet();
};
nextBtn.onclick = () => {
  plannetId += 1;
  updateBtnState();
  updatePlanet();
};
