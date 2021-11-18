const prevBtn = document.querySelector(".button-prev");
const nextBtn = document.querySelector(".button-next");
const pauseBtn = document.querySelector(".button-pause");
let state = document.querySelector(".current-page");
let slides = document.querySelectorAll(".banner-slide");
let currentSlide = 0;
let slideInterval = setInterval(showSlides, 5000);
let playing = true;

function showSlides() {
  slides[currentSlide].classList.remove("is-active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("is-active");
  state.innerHTML = currentSlide + 1;
}

function pauseSlide() {
  pauseBtn.innerHTML = ">";
  playing = false;
  clearInterval(slideInterval);
}

function playSlide() {
  pauseBtn.innerHTML = "||";
  playing = true;
  slideInterval = setInterval(showSlides, 5000);
}

pauseBtn.addEventListener("click", function () {
  if (playing) pauseSlide();
  else playSlide();
});

nextBtn.addEventListener("click", function () {
  if (playing) {
    clearInterval(slideInterval);
    slides[currentSlide].classList.remove("is-active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("is-active");
    slideInterval = setInterval(showSlides, 5000);
  } else {
    slides[currentSlide].classList.remove("is-active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("is-active");
  }
  state.innerHTML = currentSlide + 1;
});

prevBtn.addEventListener("click", function () {
  if (playing) {
    clearInterval(slideInterval);
    slides[currentSlide].classList.remove("is-active");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add("is-active");
    slideInterval = setInterval(showSlides, 5000);
  } else {
    slides[currentSlide].classList.remove("is-active");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add("is-active");
  }
  state.innerHTML = currentSlide + 1;
});
