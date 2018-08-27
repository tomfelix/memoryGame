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

const init = () => {
  cards.forEach((card) => {
    const position = Math.floor(Math.random() * cardColors.length);
    card.classList.add(cardColors[position]);
    cardColors.splice(position, 1);
    console.log(cardColors);
  })
  setTimeout(function () {
    cards.forEach(function (card) {
      card.classList.add('ukryte')
    })
  }, 2000)
}
init();
