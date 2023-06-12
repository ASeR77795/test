export class Good {
  id;
  title;
  price;
  description;
  imgSrc;
  constructor(id, title, price, description, imgSrc) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.imgSrc = imgSrc;
  }
}
