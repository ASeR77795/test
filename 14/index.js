import { Answer } from "./Answer.js";
import { Question } from "./Question.js";
import { Test } from "./Test.js";
const data = {
  title: "HTML and CSS",
  questions: [
    new Question("Is correct - <br></br> in HTML5?", "first", [
      new Answer("Yes"),
      new Answer("No", true),
    ]),
    new Question("Якого значеня display не існує?", "second", [
      new Answer("block"),
      new Answer("grid"),
      new Answer("flex"),
      new Answer("mansory", true),
      new Answer("table"),
    ]),
    new Question("Який селектор найспецефічний", "third", [
      new Answer("p + div"),
      new Answer(".card#id"),
      new Answer(".card #id"),
      new Answer("card #id.card_content", true),
      new Answer("p::after"),
      new Answer(".card"),
    ]),
  ],
};
const tester = new Test(data);
tester.init();
