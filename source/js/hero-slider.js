import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';

const heroSlider = new Swiper('#hero-slider', {
  modules: [Pagination],
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '#hero-slider-pagination',
    bulletElement: 'button',
    bulletClass: 'hero-pagination__bullet',
    bulletActiveClass: 'hero-pagination__bullet--current',
    clickable: true
  }
});

// heroSlider.slides.forEach((slide, index) => {
//   slide.addEventListener('focusin', () => {
//     heroSlider.slideTo(index);
//   });
// });
