const tabBtns = document.querySelectorAll(".tab__btn");
const tabContent = document.querySelectorAll(".tab__text");
let count = 0;
tabBtns.forEach((item, index) => {
  item.addEventListener("click", () => {
    tabBtns.forEach((item, indexT) => {
      item.classList.remove("active");
    });
    tabContent.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
    count = index;
    console.log(count);
    tabContent.forEach((item, index) => {
      if (index === count) {
        item.classList.add("active");
      }
    });
  });
});
/* 
    Задание 1:

    Доделать слайдер с урока

    1. Переписать код слайдера с урока по видео
    2. Доделать автоматическое переключение слайдов с интвервалом в 2 секунды

*/

/* 
    Задание 2:

    Доделать tabs с урока

    1. Переписать код tabs с урока по видео
    2. Внутри третьей вкладки добавить функционал табов. Количество вкладок: 2. Контент внутри - на ваш вкус 

*/
