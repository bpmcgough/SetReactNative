let cards = {};

cards.selectedCards = [];
cards.usedCards = [];
cards.currentCards = [];

cards.allTheCards = [
  {color: 'red', number: 1, fill: 'empty', shape: 'diamond', img: '', id: 1},
  {color: 'red', number: 2, fill: 'empty', shape: 'diamond', img: '', id: 2},
  {color: 'red', number: 3, fill: 'empty', shape: 'diamond', img: '', id: 3},
  {color: 'red', number: 1, fill: 'shaded', shape: 'diamond', img: '', id: 4},
  {color: 'red', number: 2, fill: 'shaded', shape: 'diamond', img: '', id: 5},
  {color: 'red', number: 3, fill: 'shaded', shape: 'diamond', img: '', id: 6},
  {color: 'red', number: 1, fill: 'full', shape: 'diamond', img: '', id: 7},
  {color: 'red', number: 2, fill: 'full', shape: 'diamond', img: '', id: 8},
  {color: 'red', number: 3, fill: 'full', shape: 'diamond', img: '', id: 9},
  {color: 'green', number: 1, fill: 'empty', shape: 'diamond', img: '', id: 10},
  {color: 'green', number: 2, fill: 'empty', shape: 'diamond', img: '', id: 11},
  {color: 'green', number: 3, fill: 'empty', shape: 'diamond', img: '', id: 12},
  {color: 'green', number: 1, fill: 'shaded', shape: 'diamond', img: '', id: 13},
  {color: 'green', number: 2, fill: 'shaded', shape: 'diamond', img: '', id: 14},
  {color: 'green', number: 3, fill: 'shaded', shape: 'diamond', img: '', id: 15},
  {color: 'green', number: 1, fill: 'full', shape: 'diamond', img: '', id: 16},
  {color: 'green', number: 2, fill: 'full', shape: 'diamond', img: '', id: 17},
  {color: 'green', number: 3, fill: 'full', shape: 'diamond', img: '', id: 18},
  {color: 'purple', number: 1, fill: 'empty', shape: 'diamond', img: '', id: 19},
  {color: 'purple', number: 2, fill: 'empty', shape: 'diamond', img: '', id: 20},
  {color: 'purple', number: 3, fill: 'empty', shape: 'diamond', img: '', id: 21},
  {color: 'purple', number: 1, fill: 'shaded', shape: 'diamond', img: '', id: 22},
  {color: 'purple', number: 2, fill: 'shaded', shape: 'diamond', img: '', id: 23},
  {color: 'purple', number: 3, fill: 'shaded', shape: 'diamond', img: '', id: 24},
  {color: 'purple', number: 1, fill: 'full', shape: 'diamond', img: '', id: 25},
  {color: 'purple', number: 2, fill: 'full', shape: 'diamond', img: '', id: 26},
  {color: 'purple', number: 3, fill: 'full', shape: 'diamond', img: '', id: 27},

  // {color: 'red', number: 1, fill: 'empty', shape: 'oval', img: ''},
  // {color: 'red', number: 2, fill: 'empty', shape: 'oval', img: ''},
  // {color: 'red', number: 3, fill: 'empty', shape: 'oval', img: ''},
  // {color: 'red', number: 1, fill: 'shaded', shape: 'oval', img: ''},
  // {color: 'red', number: 2, fill: 'shaded', shape: 'oval', img: ''},
  // {color: 'red', number: 3, fill: 'shaded', shape: 'oval', img: ''},
  // {color: 'red', number: 1, fill: 'full', shape: 'oval', img: ''},
  // {color: 'red', number: 2, fill: 'full', shape: 'oval', img: ''},
  // {color: 'red', number: 3, fill: 'full', shape: 'oval', img: ''},
  // {color: 'green', number: 1, fill: 'empty', shape: 'oval', img: ''},
  // {color: 'green', number: 2, fill: 'empty', shape: 'oval', img: ''},
  // {color: 'green', number: 3, fill: 'empty', shape: 'oval', img: ''},
  // {color: 'green', number: 1, fill: 'shaded', shape: 'oval', img: ''},
  // {color: 'green', number: 2, fill: 'shaded', shape: 'oval', img: ''},
  // {color: 'green', number: 3, fill: 'shaded', shape: 'oval', img: ''},
  // {color: 'green', number: 1, fill: 'full', shape: 'oval', img: ''},
  // {color: 'green', number: 2, fill: 'full', shape: 'oval', img: ''},
  // {color: 'green', number: 3, fill: 'full', shape: 'oval', img: ''},
  // {color: 'purple', number: 1, fill: 'empty', shape: 'oval', img: ''},
  // {color: 'purple', number: 2, fill: 'empty', shape: 'oval', img: ''},
  // {color: 'purple', number: 3, fill: 'empty', shape: 'oval', img: ''},
  // {color: 'purple', number: 1, fill: 'shaded', shape: 'oval', img: ''},
  // {color: 'purple', number: 2, fill: 'shaded', shape: 'oval', img: ''},
  // {color: 'purple', number: 3, fill: 'shaded', shape: 'oval', img: ''},
  // {color: 'purple', number: 1, fill: 'full', shape: 'oval', img: ''},
  // {color: 'purple', number: 2, fill: 'full', shape: 'oval', img: ''},
  // {color: 'purple', number: 3, fill: 'full', shape: 'oval', img: ''},
  //
  // {color: 'red', number: 1, fill: 'empty', shape: 'rectangle', img: ''},
  // {color: 'red', number: 2, fill: 'empty', shape: 'rectangle', img: ''},
  // {color: 'red', number: 3, fill: 'empty', shape: 'rectangle', img: ''},
  // {color: 'red', number: 1, fill: 'shaded', shape: 'rectangle', img: ''},
  // {color: 'red', number: 2, fill: 'shaded', shape: 'rectangle', img: ''},
  // {color: 'red', number: 3, fill: 'shaded', shape: 'rectangle', img: ''},
  // {color: 'red', number: 1, fill: 'full', shape: 'rectangle', img: ''},
  // {color: 'red', number: 2, fill: 'full', shape: 'rectangle', img: ''},
  // {color: 'red', number: 3, fill: 'full', shape: 'rectangle', img: ''},
  // {color: 'green', number: 1, fill: 'empty', shape: 'rectangle', img: ''},
  // {color: 'green', number: 2, fill: 'empty', shape: 'rectangle', img: ''},
  // {color: 'green', number: 3, fill: 'empty', shape: 'rectangle', img: ''},
  // {color: 'green', number: 1, fill: 'shaded', shape: 'rectangle', img: ''},
  // {color: 'green', number: 2, fill: 'shaded', shape: 'rectangle', img: ''},
  // {color: 'green', number: 3, fill: 'shaded', shape: 'rectangle', img: ''},
  // {color: 'green', number: 1, fill: 'full', shape: 'rectangle', img: ''},
  // {color: 'green', number: 2, fill: 'full', shape: 'rectangle', img: ''},
  // {color: 'green', number: 3, fill: 'full', shape: 'rectangle', img: ''},
  // {color: 'purple', number: 1, fill: 'empty', shape: 'rectangle', img: ''},
  // {color: 'purple', number: 2, fill: 'empty', shape: 'rectangle', img: ''},
  // {color: 'purple', number: 3, fill: 'empty', shape: 'rectangle', img: ''},
  // {color: 'purple', number: 1, fill: 'shaded', shape: 'rectangle', img: ''},
  // {color: 'purple', number: 2, fill: 'shaded', shape: 'rectangle', img: ''},
  // {color: 'purple', number: 3, fill: 'shaded', shape: 'rectangle', img: ''},
  // {color: 'purple', number: 1, fill: 'full', shape: 'rectangle', img: ''},
  // {color: 'purple', number: 2, fill: 'full', shape: 'rectangle', img: ''},
  // {color: 'purple', number: 3, fill: 'full', shape: 'rectangle', img: ''}
];

export default cards;
