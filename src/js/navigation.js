const listItems = document.querySelectorAll('.header-nav__item');
const hamburgerBtn = document.querySelector('.button--burger');
let hambergerActive = false;
const html = document.querySelector('html');
const headerList = document.querySelector('.header-nav-list');
const headerBtn = document.querySelector('.header-nav__button');

let activeIndex = -1;

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', function () {
    if (activeIndex > -1) {
      listItems[activeIndex]
        .querySelector('.sub-menu')
        .classList.remove('is-active');
      listItems[activeIndex]
        .querySelector('.header-nav__button')
        .classList.remove('is-active');
    }
    const subMenu = listItems[i].querySelector('.sub-menu');
    const btn = listItems[i].querySelector('.header-nav__button');
    subMenu.classList.add('is-active');
    btn.classList.add('is-active');
    activeIndex = i;
  });
}

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
