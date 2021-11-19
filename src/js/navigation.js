const listItems = document.querySelectorAll('.header-nav__item');
const hamburgerBtn = document.querySelector('.button--burger');
let hambergerActive = false;
const html = document.querySelector('html');
const headerList = document.querySelector('.header-nav-list');
const headerBtn = document.querySelector('.header-nav__button');

listItems.forEach((item, i) => {
  item.addEventListener('click', function () {
    if (item.querySelector('.sub-menu').classList.contains('is-active')) {
      item.querySelector('.sub-menu').classList.remove('is-active');
      item.querySelector('.header-nav__button').classList.remove('is-active');
    } else {
      let prev = headerList.querySelectorAll('.is-active');
      for (const pre of prev) {
        pre.classList.remove('is-active');
      }

      item.querySelector('.sub-menu').classList.add('is-active');
      item.querySelector('.header-nav__button').classList.add('is-active');
    }
  });
});

hamburgerBtn.addEventListener('click', function () {
  if (hambergerActive) {
    html.classList.remove('is-active');
    hamburgerBtn.classList.remove('is-active');
    headerList.classList.remove('is-active');
    headerBtn.classList.remove('is-active');
    hambergerActive = false;
  } else {
    html.classList.add('is-active');
    hamburgerBtn.classList.add('is-active');
    headerList.classList.add('is-active');
    headerBtn.classList.add('is-active');
    hambergerActive = true;
  }
});
