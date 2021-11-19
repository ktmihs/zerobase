const carouselbtnGroup = document.querySelector('.carousel-article-control');
const prev = carouselbtnGroup.querySelector('.button-prev');
const next = carouselbtnGroup.querySelector('.button-next');
const pause = carouselbtnGroup.querySelector('.button-pause');

const cState = document.querySelector('.carousel-article-status');
let carouselState = cState.querySelector('.current-page');

let carouselSlides = document.querySelectorAll('.carousel-course');
let cCurrent = 0;
let carouselInterval = setInterval(cShowSlides, 3000);
let cPlaying = true;

function cShowSlides() {
  carouselSlides[cCurrent].classList.remove('is-active');
  cCurrent = (cCurrent + 1) % carouselSlides.length;
  carouselSlides[cCurrent].classList.add('is-active');
  carouselState.innerHTML = cCurrent + 1;
}

function cPauseSlide() {
  pause.innerHTML = '>';
  cPlaying = false;
  clearInterval(carouselInterval);
}

function cPlaySlide() {
  pause.innerHTML = '||';
  cPlaying = true;
  carouselInterval = setInterval(cShowSlides, 3000);
}

pause.addEventListener('click', function () {
  if (cPlaying) cPauseSlide();
  else cPlaySlide();
});

next.addEventListener('click', function () {
  if (cPlaying) {
    clearInterval(carouselInterval);
    carouselSlides[cCurrent].classList.remove('is-active');
    cCurrent = (cCurrent + 1) % carouselSlides.length;
    carouselSlides[cCurrent].classList.add('is-active');
    carouselInterval = setInterval(cShowSlides, 5000);
  } else {
    carouselSlides[cCurrent].classList.remove('is-active');
    cCurrent = (cCurrent + 1) % carouselSlides.length;
    carouselSlides[cCurrent].classList.add('is-active');
  }
  carouselState.innerHTML = cCurrent + 1;
});

prev.addEventListener('click', function () {
  if (cPlaying) {
    clearInterval(carouselInterval);
    carouselSlides[cCurrent].classList.remove('is-active');
    cCurrent = (cCurrent - 1 + carouselSlides.length) % carouselSlides.length;
    carouselSlides[cCurrent].classList.add('is-active');
    carouselInterval = setInterval(cShowSlides, 3000);
  } else {
    carouselSlides[cCurrent].classList.remove('is-active');
    cCurrent = (cCurrent - 1 + carouselSlides.length) % carouselSlides.length;
    carouselSlides[cCurrent].classList.add('is-active');
  }
  carouselState.innerHTML = cCurrent + 1;
});
