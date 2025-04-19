import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

new Swiper('#training-slider', {
  modules: [Navigation],
  slidesPerView: 1,
  navigation: {
    nextEl: '#training-slider-next',
    prevEl: '#training-slider-prev',
  },
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});
