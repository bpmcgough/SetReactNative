import cards from './allTheCards';

let todosLosCards = cards.allTheCards;
let currentCards = cards.currentCards;
let selectedCards = cards.selectedCards;
let usedCards = cards.usedCards;
let Helpers = {};

Helpers.shuffle = (array) => {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

// handleFoundSet should do several things:
// - remove selectedCards objs from currentCards
// - add selectedCards to usedCards
// - empty selectedCards
// - add three more cards to currentCards
Helpers.handleFoundSet = () => {

  currentCards = currentCards.filter(el => {
    let shouldReturn = true;
    selectedCards.forEach(card => {
      if(card.id === el.id){
        shouldReturn = false;
      }
    });
    if(shouldReturn) return el;
	});

  currentCards = currentCards.map(card => card.color = 'green');

  usedCards = usedCards.concat(selectedCards);

  selectedCards = [];

  for(let i = 0; i < 3; i++){
    currentCards.push(todosLosCards.pop());
  }
};

Helpers.checkForSet = () => {
  if(!checkShapes(selectedCards) || !checkColors(selectedCards) || !checkNumbers(selectedCards) || !checkFill(selectedCards)){
    return false;
  }
  return true;
};

checkShapes = (array) => {
  if(array.length === 3){
    if(array[0].shape === array[1].shape && array[1].shape === array[2].shape){
      return true;
    } else if(array[0].shape !== array[1].shape && array[0].shape !== array[2].shape && array[1].shape !== array[2].shape){
      return true;
    }
  }
  return false;
};

checkColors = (array) => {
  if(array.length === 3){
    if(array[0].color === array[1].color && array[1].color === array[2].color){
      return true;
    } else if(array[0].color !== array[1].color && array[0].color !== array[2].color && array[1].color !== array[2].color){
      return true;
    }
  }
  return false;
};

checkNumbers = (array) => {
  if(array.length === 3){
    if(array[0].number === array[1].number && array[1].number === array[2].number){
      return true;
    } else if(array[0].number !== array[1].number && array[0].number !== array[2].number && array[1].number !== array[2].number){
      return true;
    }
  }
  return false;
};

checkFill = (array) => {
  if(array.length === 3){
    if(array[0].fill === array[1].fill && array[1].fill === array[2].fill){
      return true;
    } else if(array[0].fill !== array[1].fill && array[0].fill !== array[2].fill && array[1].fill !== array[2].fill){
      return true;
    }
  }
  return false;
};

export default Helpers;
