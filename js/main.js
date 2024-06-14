// получаем все кнопки навигации
const tabsButtons = document.querySelectorAll('.episodes__button');

// Проходимся по всем кнопкам
tabsButtons.forEach(btn => {
    // вешаем на каждую кнопку обработчик события клик
    btn.addEventListener('click', () => {
        // Получаем предыдущую активную кнопку
        const prevActiveItem = document.querySelector('.episodes__grid._active');
        // Получаем предыдущую активную вкладку
        const prevActiveButton = document.querySelector('.episodes__button._active');

        // Проверяем есть или нет предыдущая активная кнопка
        if (prevActiveButton) {
            //Удаляем класс _active у предыдущей кнопки если она есть
            prevActiveButton.classList.remove('_active');
        }

        // Проверяем есть или нет предыдущая активная вкладка
        if (prevActiveItem) {
            // Удаляем класс _active у предыдущей вкладки если она есть
            prevActiveItem.classList.remove('_active');
        }
        // получаем id новой активной вкладки, который мы перем из атрибута data-tab у кнопки
        const nextActiveItemId = `#${btn.getAttribute('data-tab')}`;
        // получаем новую активную вкладку по id
        const nextActiveItem = document.querySelector(nextActiveItemId);

        // добавляем класс _active кнопке на которую нажали
        btn.classList.add('_active');
        // добавляем класс _active новой выбранной вкладке
        nextActiveItem.classList.add('_active');
    });
})


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


