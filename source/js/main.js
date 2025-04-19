import './navigation-toggle';
import './hero-slider';
import './tours-slider';
import './training-slider';

const titles = document.querySelectorAll('.title');
titles.forEach((title) => {
  title.dataset.text = title.textContent;
});
