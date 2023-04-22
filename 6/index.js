class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  toString() {
    return `${this.rank} of ${this.suit}`;
  }
}

class Deck {
  constructor() {
    this.ranks = [
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
      "Ace",
    ];
    this.suits = ["Spades", "Clubs", "Hearts", "Diamonds"];
    this.cards = this.suits.flatMap((suit) =>
      this.ranks.map((rank) => new Card(rank, suit))
    );
  }

  shuffle() {
    this.cards.forEach((card, i) => {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    });
  }

  deal() {
    return this.cards.pop();
  }
}

const deck = new Deck();
console.log(
  "Before shuffle:",
  deck.cards.map((card) => card.toString())
);
deck.shuffle();
console.log(
  "After shuffle:",
  deck.cards.map((card) => card.toString())
);
