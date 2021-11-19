const leftButton = document.querySelector('.button-practice-prev');
const rightButton = document.querySelector('.button-practice-next');
const cardContainer = document.querySelector('.practice-container');
const card = document.querySelectorAll('.card-practice');
const n = card.length;

let index = 0;
leftButton.addEventListener('click', () => {
  let posLeft = Array(n);
  for (let i = 0; i < n; i++) {
    posLeft[i] = card[i].offsetLeft;
  }
  index--;
  if (index < 0) index = n - 1;
  index = Math.max(index - 1, 0);
  cardContainer.scrollTo({
    left: posLeft[index],
    behavior: 'smooth',
  });
});

rightButton.addEventListener('click', () => {
  let posLeft = Array(n);
  for (let i = 0; i < n; i++) {
    posLeft[i] = card[i].offsetLeft;
  }
  index++;
  if (index >= n) index = 0;
  cardContainer.scrollTo({
    left: posLeft[index],
    behavior: 'smooth',
  });
});
