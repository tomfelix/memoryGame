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

const clickCard = () => {
}

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
