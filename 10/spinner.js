class Spinner {
  spinner = document.querySelector(".card__spinner");
  hiddenClassName = "hide";
  show() {
    this.spinner.classList.remove(this.hiddenClassName);
  }
  hide() {
    this.spinner.classList.add(this.hiddenClassName);
  }
}
class Card {
  elem = document.querySelector(".card__name");
  hiddenClassName = "hide";
  set name(newName) {
    this.elem.innerText = newName;
  }
  show() {
    this.elem.classList.remove(this.hiddenClassName);
  }
  hide() {
    this.elem.classList.add(this.hiddenClassName);
  }
}
export const spinner = new Spinner();
export const card = new Card();
