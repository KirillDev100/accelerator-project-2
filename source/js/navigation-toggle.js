const navigationList = document.querySelector('.main-navigation__list');
const navigationToggle = document.querySelector('.main-header__navigation-toggle');

navigationToggle.addEventListener('click', () => {
  if (navigationToggle.classList.contains('main-header__navigation-toggle--open')) {
    navigationList.classList.remove('main-navigation__list--open');
    navigationToggle.classList.remove('main-header__navigation-toggle--open');
    document.body.classList.remove('page__body--menu-opened');
  } else {
    navigationList.classList.add('main-navigation__list--open');
    navigationToggle.classList.add('main-header__navigation-toggle--open');
    document.body.classList.add('page__body--menu-opened');
  }
});
