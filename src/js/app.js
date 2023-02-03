import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, {Navigation, Pagination} from 'swiper';
Swiper.use([Pagination]);

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
});
const swiper2 = new Swiper('.swiper-2', {
    loop: true,
    slidesPerView: 1,
    spaceBetween:40,
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        420: {slidesPerView: 4,}
    }
});


let menu = document.getElementById('menu');
let header__utils = document.getElementById('header__utils');
menu.addEventListener('click', toggleMenu);
let close = document.getElementById('close');
close.addEventListener('click', toggleMenu);
function toggleMenu() {
    header__utils.classList.toggle('active')
}
