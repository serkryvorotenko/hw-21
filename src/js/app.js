import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, {Navigation, Pagination} from 'swiper';

const swiper = new Swiper();


let menu = document.getElementById('menu');
let header__utils = document.getElementById('header__utils');
menu.addEventListener('click', toggleMenu);
let close = document.getElementById('close');
close.addEventListener('click', toggleMenu);
function toggleMenu() {
    header__utils.classList.toggle('active')
}
