const cardColors = [
  'red',
  'red',
  'blue',
  'blue',
  'green',
  'green',
  'yellow',
  'yellow',
  'violet',
  'violet',
  'lightblue',
  'lightblue',
  'pink',
  'pink',
  'brown',
  'brown',
  'grey',
  'grey'
];

let cards = document.querySelectorAll('div');
cards = [...cards];

const startTime = new Date().getTime();

let activeCard = '';
const activeCards = [];
const countPairs = cards.length / 2;
let gameResult = 0;

const clickCard = (e) => {
  activeCard = e.target;
  activeCard.classList.remove('ukryte');
  activeCard.removeEventListener('click', clickCard);

  if (activeCards.length === 0) {
    activeCards[0] = activeCard;
    return;
  } else {
    cards.forEach(card => card.removeEventListener('click', clickCard));
    activeCards[1] = activeCard;
    setTimeout(() => {
      if (activeCards[0].className === activeCards[1].className) {
        activeCards.forEach(card => {
          card.classList.add('off');
        });
        gameResult++;
        if (gameResult === countPairs) {
          const endTime = new Date().getTime();
          const gameTime = (endTime - startTime) / 1000;
          alert(`Wygrałeś! Twoj czas to ${gameTime} sekund!`);
          location.reload();
        }
      } else {
        activeCards.forEach(card => {
          card.classList.add('ukryte');
        });
      }
      activeCard = '';
      activeCards.length = 0;
      cards.forEach(card => {
        if (card.classList.contains('off')) {
          return;
        }
        card.addEventListener('click', clickCard);
      });
    }, 1000)
  }
};

const init = () => {
  cards.forEach(card => {
    const position = Math.floor(Math.random() * cardColors.length);
    card.classList.add(cardColors[position]);
    cardColors.splice(position, 1);
  })
  setTimeout(() => {
    cards.forEach(card => {
      card.classList.add('ukryte');
      card.addEventListener('click', clickCard);
    });
  }, 2000);
}
init();
