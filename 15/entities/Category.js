export class Category {
  title;
  id;
  goodsIds;
  constructor(title, id, goodsIds = []) {
    this.title = title;
    this.id = id;
    this.goodsIds = goodsIds;
  }
}
