import Swiper, {Navigation} from 'swiper';
const slides = document.querySelectorAll('.product-card');

const trainersSwiper = new Swiper('.trainers__slider', {
  direction: 'horizontal',
  effect: 'slide',
  speed: 400,
  loop: true,
  watchOverflow: true,

  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  modules: [Navigation],

  navigation: {
    nextEl: '.trainers__slider-button--next',
    prevEl: '.trainers__slider-button--prev',
  },
});

for (let slide of slides) {
  slide.addEventListener('click', () => {
    slide.classList.toggle('product-card--touch');
  });
}


export {trainersSwiper};
