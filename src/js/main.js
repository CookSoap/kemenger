// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles


// init Swiper:
const swiper1 = new Swiper('.reviews__swiper', {
    modules: [Navigation, Pagination],
    loop: true,
    breakpoints: {
        575: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        969: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1348: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiper2 = new Swiper('.catalog__carts', {
    modules: [Navigation, Pagination],
    loop: true,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        727: {
            slidesPerView: 1,

        },
        1316: {
            slidesPerView: 2,

        },
        1327: {
            slidesPerView: 3,
        }
    },
});


//functions 

/* document.getElementById("catalog-cart__more").onclick = function () {
    document.getElementById("catalog-cart__hiden-skills").classList.toggle("hiden");
    showSkills();
};

function showSkills() {
    document.getElementById("catalog-cart__hiden-skills").classList.toggle("hiden");
    console.log('working')
}
 */

function showHide(id) {
    document.getElementById(id).classList.toggle("hiden");
}

document.getElementById("request").onclick = function () {
    showHide('header__form')
    showHide('header__form-overlay')
    document.body.classList.toggle('locked');
};


document.getElementById("header__form-overlay").onclick = function () {
    showHide('header__form')
    showHide('header__form-overlay')
    document.body.classList.toggle('locked');
};


document.getElementById("header__button2").onclick = function () {
    showHide('header__form')
    document.body.classList.toggle('locked');
    showHide('header__form-overlay')
    alert('Это демонстрационная версия сайта, отправка формы недоступна')
};