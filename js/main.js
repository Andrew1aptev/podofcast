// слайде в hero section на главной странице
const heroSlider = new Swiper(".hero-slider", {
  direction: "horizontal",
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: 2,
  spaceBetween: 20,
  breakpoints: {
    1024: {
      spaceBetween: 20,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerGroup: 1,
    }
  }
});
// слайдер в секции feedback на главной странице
const feedbackSlider = new Swiper(".feedback-slider", {
  direction: "horizontal",
  centeredSlides: true,
  slidesPerView: "auto",
  slidesPerGroup: 1,
  spaceBetween: 20,
  initialSlide: 1,
  navigation: {
    nextEl: ".feedback__button-prev",
    prevEl: ".feedback__button-next",
  },
});

// слайдер в секции sponsor на странице about
const sponsorsSlider = new Swiper(".sponsors-slider", {
  direction: "horizontal",
  centeredSlides: true,
  slidesPerView: "auto",
  slidesPerGroup: 1,
  spaceBetween: 20,
  initialSlide: 1,
  navigation: {
    nextEl: ".sponsors__button-prev",
    prevEl: ".sponsors__button-next",
  },
});

const header = document.querySelector(".header");
const burgerButton = document.querySelector(".header__mobile-button");

// при нажатии на кнопку бургера к классу .header добавляется класс .open
// при добавлении класс open открывается бургер меню
burgerButton.addEventListener("click", ()=> {
  header.classList.toggle("open");
})