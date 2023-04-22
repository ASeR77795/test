const btn = document.querySelectorAll(".num div");
const win = document.querySelector(".window");
const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const winArr = [];
let result = 0;
let operator = "+";
let count = 0;
btn.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.innerText === "=") {
      if (count !== 0) {
        if (operator === "+") {
          result += count;
        } else if (operator === "-") {
          result -= count;
        }
      }
      win.innerText = result;
      winArr.length = 0;
      result = 0;
      operator = "+";
      count = 0;
    } else if (item.innerText === "+" || item.innerText === "-") {
      if (count !== 0) {
        if (operator === "+") {
          result += count;
        } else if (operator === "-") {
          result -= count;
        }
      }
      operator = item.innerText;
      count = 0;
      winArr.push(item.innerText);
      win.innerText = winArr.join("");
    } else {
      count = count * 10 + parseInt(item.innerText);
      winArr.push(item.innerText);
      win.innerText = winArr.join("");
    }
  });
});

class CardDeck {
  constructor() {
    this.cards = [];
    this.suits = ["hearts", "diamonds", "clubs", "spades"];
    this.values = [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
    ];

    this.suits.forEach((suit) => {
      this.values.forEach((value) => {
        this.cards.push(`${value} of ${suit}`);
      });
    });
  }

  shuffle() {
    let currentIndex = this.cards.length;
    let temporaryValue, randomIndex;

    this.cards.forEach((card, index) => {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    });

    return this.cards;
  }
}
