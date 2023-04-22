const slides = document.querySelectorAll(".slide");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const dots = document.querySelectorAll(".dot");
const length = slides.length;
let count = 0;

btnNext.addEventListener("click", () => {
  count = (count + 1) % length;

  slides.forEach((item, index) => {
    item.classList.remove("active");
    if (index === count) {
      item.classList.add("active");
    }
  });

  dots.forEach((item, index) => {
    item.classList.remove("active");
    if (index === count) {
      item.classList.add("active");
    }
  });
});

btnPrev.addEventListener("click", () => {
  count = (count - 1 + length) % length;

  slides.forEach((item, index) => {
    item.classList.remove("active");
    if (index === count) {
      item.classList.add("active");
    }
  });

  dots.forEach((item, index) => {
    item.classList.remove("active");
    if (index === count) {
      item.classList.add("active");
    }
  });
});

dots.forEach((item, index) => {
  item.addEventListener("click", () => {
    dots.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
    count = index;
    slides.forEach((item, index) => {
      item.classList.remove("active");
      if (index === count) {
        item.classList.add("active");
      }
    });
  });
});
// const slides = document.querySelectorAll(".slide");
// const btnPrev = document.querySelector(".btn-prev");
// const btnNext = document.querySelector(".btn-next");
// const dots = document.querySelectorAll(".dot");
// let count = 0;

// function updateSlides() {
//   slides.forEach((item, index) => {
//     item.classList.toggle("active", index === count);
//   });
// }

// function updateDots() {
//   dots.forEach((item, index) => {
//     item.classList.toggle("active", index === count);
//   });
// }

// function nextSlide() {
//   count = (count + 1) % slides.length;
//   updateSlides();
//   updateDots();
// }

// function prevSlide() {
//   count = (count - 1 + slides.length) % slides.length;
//   updateSlides();
//   updateDots();
// }

// function setSlide(index) {
//   count = index;
//   updateSlides();
//   updateDots();
// }

// btnNext.addEventListener("click", nextSlide);
// btnPrev.addEventListener("click", prevSlide);
// dots.forEach((dot, index) =>
//   dot.addEventListener("click", () => setSlide(index))
// );
