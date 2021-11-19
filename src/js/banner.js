const bannerBtnGroup = document.querySelector('.banner-list-control');
const prevBtn = bannerBtnGroup.querySelector('.button-prev');
const nextBtn = bannerBtnGroup.querySelector('.button-next');
const pauseBtn = bannerBtnGroup.querySelector('.button-pause');

const bannerStatus = document.querySelector('.banner-list-status');
let bState = bannerStatus.querySelector('.current-page');
let slides = document.querySelectorAll('.banner-slide');

let currentSlide = 0;
let slideInterval = setInterval(showSlides, 5000);
let bannerPlaying = true;

function showSlides() {
  slides[currentSlide].classList.remove('is-active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('is-active');
  bState.innerHTML = currentSlide + 1;
}

function pauseSlide() {
  pauseBtn.innerHTML = '>';
  bannerPlaying = false;
  clearInterval(slideInterval);
}

function playSlide() {
  pauseBtn.innerHTML = '||';
  bannerPlaying = true;
  slideInterval = setInterval(showSlides, 5000);
}

pauseBtn.addEventListener('click', function () {
  if (bannerPlaying) pauseSlide();
  else playSlide();
});

nextBtn.addEventListener('click', function () {
  if (bannerPlaying) {
    clearInterval(slideInterval);
    slides[currentSlide].classList.remove('is-active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('is-active');
    slideInterval = setInterval(showSlides, 5000);
  } else {
    slides[currentSlide].classList.remove('is-active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('is-active');
  }
  bState.innerHTML = currentSlide + 1;
});

prevBtn.addEventListener('click', function () {
  if (bannerPlaying) {
    clearInterval(slideInterval);
    slides[currentSlide].classList.remove('is-active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('is-active');
    slideInterval = setInterval(showSlides, 5000);
  } else {
    slides[currentSlide].classList.remove('is-active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('is-active');
  }
  bState.innerHTML = currentSlide + 1;
});
