export class Question {
  constructor(title, name, answers = []) {
    this.title = title;
    this.name = name;
    this.answers = answers;
  }
}
