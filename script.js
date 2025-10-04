const cardsContainer = document.querySelector('.cards');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

function getCardWidth() {
  const card = document.querySelector('.card');
  const style = window.getComputedStyle(card);
  const gap = parseInt(style.marginRight || 20); // fallback
  return card.offsetWidth + gap;
}



// scroll by 4 cards
nextBtn.addEventListener('click', () => {
  cardsContainer.scrollLeft += getCardWidth() * 4;
  updateButtons();
});

prevBtn.addEventListener('click', () => {
  cardsContainer.scrollLeft -= getCardWidth() * 4;
  updateButtons();
});

// check if buttons should be visible
function updateButtons() {
  const maxScrollLeft = cardsContainer.scrollWidth - cardsContainer.clientWidth;

  if (cardsContainer.scrollLeft <= 0) {
    prevBtn.style.display = "none";  // hide left button
  } else {
    prevBtn.style.display = "block"; // show left button
  }

  if (cardsContainer.scrollLeft >= maxScrollLeft - 5) {
    nextBtn.style.display = "none";  // hide right button
  } else {
    nextBtn.style.display = "block"; // show right button
  }
}

// run once on load
updateButtons();

// also update when user scrolls manually
cardsContainer.addEventListener("scroll", updateButtons);
