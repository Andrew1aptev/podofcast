const swiper = new Swiper(".swiper", {
  // Optional parameters
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
const feedbackSlider = new Swiper(".feedback-slider", {
  // Optional parameters
  direction: "horizontal",
  centeredSlides: true,
  slidesPerView: "auto",
  slidesPerGroup: 1,
  spaceBetween: 20,
  initialSlide: 1,
  navigation: {
    nextEl: ".feedback-slider__button-prev",
    prevEl: ".feedback-slider__button-next",
  },
});

const header = document.querySelector(".header");
const burgerButton = document.querySelector(".header__mobile-button");

burgerButton.addEventListener("click", ()=> {
  header.classList.toggle("open");
})