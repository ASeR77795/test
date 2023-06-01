import { Question } from "./Question.js";
import { Answer } from "./Answer.js";
export class Test {
  config;
  titleElement = document.querySelector(".question__title");
  wrapperElement = document.querySelector(".answer-wrapper");
  formElem = document.querySelector("form");
  constructor(config) {
    this.config = config;
  }
  init() {
    this.render();
    this.formElem.addEventListener("submit", this.handleSubmit);
  }
  render() {
    this.titleElement.innerText = this.config.title;
    this.config.questions.forEach(this.renderQuestion);
  }
  renderQuestion = ({ title, name, answers }) => {
    const answerGroup = document.createElement("div");
    const titleElem = document.createElement("h2");
    answerGroup.classList.add("answer-group", "mb-3");
    titleElem.innerText = title;
    answerGroup.append(titleElem);
    this.wrapperElement.append(answerGroup);
    const answersElements = answers.map((answer) => {
      return this.renderAnswer(answer, name);
    });
    answerGroup.append(...answersElements);
  };
  renderAnswer = ({ label }, name) => {
    const answer = document.createElement("div");
    const id = `${crypto.randomUUID()}${name}`;
    answer.classList.add("form-check");
    answer.innerHTML = `
    <input value ='${label}' class="form-check-input"
              type="radio"
              name="${name}"
              id="${id}"
              value="default"
            />
            <label class="form-check-label" for="${id}">
              ${label}
            </label>
    `;
    return answer;
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const names = this.config.questions.map(({ name }) => name);
    const elements = this.formElem.elements;
    document.querySelectorAll(".invalid").forEach((elem) => {
      elem.remove();
    });
    let isValid = true;
    const values = {};
    for (let key in elements) {
      if (names.includes(key)) {
        const group = elements[key];
        if (group.value === "") {
          isValid = false;
          const errorMessage = document.createElement("div");
          errorMessage.innerText = "Please select";
          errorMessage.classList.add("invalid");
          group[0].parentElement.parentElement.append(errorMessage);
        }
        values[key] = group.value;
      }
    }
    if (isValid) {
      this.config.questions.forEach(({ answers, name, title }) => {
        answers.forEach(({ label, isCorrect }) => {
          if (isCorrect && label === values[name]) {
            console.log(`Field ${title} is correct with value ${label}`);
            return;
          }
          // console.log(`Field ${title} is incorrect with value ${label}`);
        });
      });
    }
  };
}
