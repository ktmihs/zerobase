let scrollAmount = 0;
let scrollMin = 0;
const scrollMax = 248;

[0, 1, 2, 3].forEach((index) => {
  const leftButton = document.querySelector('.button-practice-prev');
  const rightButton = document.querySelector('.button-practice-next');
  const cardContainer =
    document.querySelector('.practice-container');


  leftButton.addEventListener('click', () => {
    cardContainer.scrollTo({
      left: Math.min((scrollAmount -= 500), scrollMin),
      behavior: 'smooth',
    });
  });

  rightButton.addEventListener('click', () => {
    cardContainer.scrollTo({
      left: Math.max((scrollAmount += 500), scrollMax),
      behavior: 'smooth',
    });
  });
});
