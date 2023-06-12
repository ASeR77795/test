export class Shop {
  categoriesWarapper = document.querySelector(".categories");
  goodsWrapper = document.querySelector(".goods");
  detailsWrapper = document.querySelector(".details");
  cartWrapper = document.querySelector("pre");
  cart = {};
  constructor(config) {
    this.config = config;
  }
  init() {
    this.render();
    this.categoriesWarapper.addEventListener("click", ({ target }) => {
      if (target.matches("li")) {
        const { id } = target.dataset;
        const category = this.config.categories.find((item) => item.id === +id);
        const goods = this.config.goods.filter((item) =>
          category.goodsIds.includes(item.id)
        );
        this.renderGoods(goods);
      }
    });
    this.goodsWrapper.addEventListener("click", ({ target }) => {
      const listItem = target.closest("li");
      if (listItem || target.matches("li")) {
        const { id } = listItem.dataset;
        const good = this.config.goods.find((item) => item.id === +id);
        this.renderDetails(good);
      }
    });
    this.detailsWrapper.addEventListener("click", ({ target }) => {
      if (target.matches("button")) {
        const { id } = target.dataset;
        const good = this.config.goods.find((item) => item.id === +id);
        if (this.cart[id]) {
          this.cart[id].count += 1;
        } else {
          this.cart[id] = {
            count: 1,
          };
        }
        this.renderCart();
        this.clearDetails();
        this.clearGoods();
        console.log(this.cart);
      }
    });
  }
  render() {
    this.renderCategories();
  }
  renderCategories() {
    this.config.categories.forEach(({ title, id }) => {
      const categoryItem = document.createElement("li");
      categoryItem.classList.add("categories__item");
      categoryItem.dataset.id = id;
      categoryItem.innerText = title;
      this.categoriesWarapper.append(categoryItem);
    });
  }
  clearDetails() {
    this.detailsWrapper.innerHTML = "";
  }
  clearGoods() {
    this.goodsWrapper.innerHTML = "";
  }
  renderGoods(goods) {
    this.clearGoods();
    goods.forEach(({ id, title, price, imgSrc }) => {
      const goodElem = document.createElement("li");
      goodElem.classList.add("goods__item");
      goodElem.dataset.id = id;
      goodElem.innerHTML = `
    <img src='${imgSrc}' alt=''>
    <h4>${title}</h4>
    <p>${price} UAH</p>`;
      this.goodsWrapper.append(goodElem);
    });
  }
  renderDetails({ imgSrc, price, title, description, id }) {
    this.clearDetails();
    const wrapper = document.createElement("div");
    wrapper.dataset.id = id;
    wrapper.innerHTML = `<img
    src="${imgSrc}"
    alt=""
  />
  <h1>${title}</h1>
  <p>
    ${description}
  </p>
  <h3>${price} UAH</h3>
  <button data-id='${id}' class="btn btn-primary w-100">Buy now</button>`;
    this.detailsWrapper.append(wrapper);
  }
  renderCart() {
    let result = "";
    const sum = Object.entries(this.cart).reduce((acc, [id, { count }]) => {
      const good = this.config.goods.find((item) => item.id === +id);
      result = `${result}\n${good.title}   ${count}    ${good.price}`;
      return acc + +good.price * count;
    }, 0);
    result = `${result}\nTotal: ${sum}`;
    this.cartWrapper.innerText = result;
  }
}
