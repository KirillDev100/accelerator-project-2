import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

const toursSlider = new Swiper('#tours-slider', {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '#tours-slider-next',
    prevEl: '#tours-slider-prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 18
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
