// табы
function setupTabs(buttonClass, gridClass) {
    const tabsButtons = document.querySelectorAll(buttonClass);

    tabsButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const prevActiveItem = document.querySelector(`${gridClass}._active`);
            const prevActiveButton = document.querySelector(`${buttonClass}._active`);

            if (prevActiveButton) {
                prevActiveButton.classList.remove('_active');
            }
            if (prevActiveItem) {
                prevActiveItem.classList.remove('_active');
            }

            const nextActiveItemId = `#${btn.getAttribute('data-tab')}`;
            const nextActiveItem = document.querySelector(nextActiveItemId);

            btn.classList.add('_active');
            nextActiveItem.classList.add('_active');
        });
    });
}

// Инициализация вкладок для .episodes__button и .episodes__grid
setupTabs('.latest-episode__button', '.latest-episode__grid');
// Инициализация вкладок для .news__button и .news__grid
setupTabs('.latest-posts__button', '.latest-posts__grid');



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
burgerButton.addEventListener("click", () => {
    header.classList.toggle("open");
})

// при нажатии на форму, курсор должен переместится в самое начало текстового поля
let textarea = document.querySelector('.message__form-textarea');
textarea.addEventListener('focus', function () {
    this.setSelectionRange(0, 0);
});


