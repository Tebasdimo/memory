const words = [
  { indigenous: 'E'ç', translation: 'Colibrí' },
  { indigenous: 'Tupa', translation: 'Araña' },
  { indigenous: 'Wala', translation: 'Grande' }, 
  { indigenous: 'kiwe', translation: 'tierra' },
  { indigenous: 'Sxita', translation: 'Armadillo' },
  { indigenous: 'Nxa', translation: 'Yuca' },
  // Add more words and translations here
];

let flippedCards = [];
let matchedCards = [];

function createCards() {
  const memoryGrid = document.getElementById('memory-grid');
  words.forEach(word => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div class="front">${word.indigenous}</div>
      <div class="back">${word.translation}</div>
    `;
    card.addEventListener('click', () => flipCard(card));
    memoryGrid.appendChild(card);
  });
}

function flipCard(card) {
  if (flippedCards.length < 2 && !flippedCards.includes(card)) {
    card.classList.add('flipped');
    flippedCards.push(card);
    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 800);
    }
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  if (card1.querySelector('.back').textContent === card2.querySelector('.back').textContent) {
    matchedCards.push(card1, card2);
    if (matchedCards.length === words.length * 2) {
      alert('Congratulations! You matched all cards.');
      // You can add further actions after winning the game
    }
  } else {
    card1.classList.remove('flipped');
    card2.classList.remove('flipped');
  }
  flippedCards = [];
}

function resetGame() {
  const memoryGrid = document.getElementById('memory-grid');
  memoryGrid.innerHTML = '';
  flippedCards = [];
  matchedCards = [];
  createCards();
}

createCards(); // Initialize the game
