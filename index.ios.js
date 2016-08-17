import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

let currentCards;

const allTheCards = [
  {color: 'red', number: 1, fill: 'empty', shape: 'diamond', img: ''},
  {color: 'red', number: 2, fill: 'empty', shape: 'diamond', img: ''},
  {color: 'red', number: 3, fill: 'empty', shape: 'diamond', img: ''},
  {color: 'red', number: 1, fill: 'shaded', shape: 'diamond', img: ''},
  {color: 'red', number: 2, fill: 'shaded', shape: 'diamond', img: ''},
  {color: 'red', number: 3, fill: 'shaded', shape: 'diamond', img: ''},
  {color: 'red', number: 1, fill: 'full', shape: 'diamond', img: ''},
  {color: 'red', number: 2, fill: 'full', shape: 'diamond', img: ''},
  {color: 'red', number: 3, fill: 'full', shape: 'diamond', img: ''},
  {color: 'green', number: 1, fill: 'empty', shape: 'diamond', img: ''},
  {color: 'green', number: 2, fill: 'empty', shape: 'diamond', img: ''},
  {color: 'green', number: 3, fill: 'empty', shape: 'diamond', img: ''},
  {color: 'green', number: 1, fill: 'shaded', shape: 'diamond', img: ''},
  {color: 'green', number: 2, fill: 'shaded', shape: 'diamond', img: ''},
  {color: 'green', number: 3, fill: 'shaded', shape: 'diamond', img: ''},
  {color: 'green', number: 1, fill: 'full', shape: 'diamond', img: ''},
  {color: 'green', number: 2, fill: 'full', shape: 'diamond', img: ''},
  {color: 'green', number: 3, fill: 'full', shape: 'diamond', img: ''},
  {color: 'purple', number: 1, fill: 'empty', shape: 'diamond', img: ''},
  {color: 'purple', number: 2, fill: 'empty', shape: 'diamond', img: ''},
  {color: 'purple', number: 3, fill: 'empty', shape: 'diamond', img: ''},
  {color: 'purple', number: 1, fill: 'shaded', shape: 'diamond', img: ''},
  {color: 'purple', number: 2, fill: 'shaded', shape: 'diamond', img: ''},
  {color: 'purple', number: 3, fill: 'shaded', shape: 'diamond', img: ''},
  {color: 'purple', number: 1, fill: 'full', shape: 'diamond', img: ''},
  {color: 'purple', number: 2, fill: 'full', shape: 'diamond', img: ''},
  {color: 'purple', number: 3, fill: 'full', shape: 'diamond', img: ''},

  {color: 'red', number: 1, fill: 'empty', shape: 'oval', img: ''},
  {color: 'red', number: 2, fill: 'empty', shape: 'oval', img: ''},
  {color: 'red', number: 3, fill: 'empty', shape: 'oval', img: ''},
  {color: 'red', number: 1, fill: 'shaded', shape: 'oval', img: ''},
  {color: 'red', number: 2, fill: 'shaded', shape: 'oval', img: ''},
  {color: 'red', number: 3, fill: 'shaded', shape: 'oval', img: ''},
  {color: 'red', number: 1, fill: 'full', shape: 'oval', img: ''},
  {color: 'red', number: 2, fill: 'full', shape: 'oval', img: ''},
  {color: 'red', number: 3, fill: 'full', shape: 'oval', img: ''},
  {color: 'green', number: 1, fill: 'empty', shape: 'oval', img: ''},
  {color: 'green', number: 2, fill: 'empty', shape: 'oval', img: ''},
  {color: 'green', number: 3, fill: 'empty', shape: 'oval', img: ''},
  {color: 'green', number: 1, fill: 'shaded', shape: 'oval', img: ''},
  {color: 'green', number: 2, fill: 'shaded', shape: 'oval', img: ''},
  {color: 'green', number: 3, fill: 'shaded', shape: 'oval', img: ''},
  {color: 'green', number: 1, fill: 'full', shape: 'oval', img: ''},
  {color: 'green', number: 2, fill: 'full', shape: 'oval', img: ''},
  {color: 'green', number: 3, fill: 'full', shape: 'oval', img: ''},
  {color: 'purple', number: 1, fill: 'empty', shape: 'oval', img: ''},
  {color: 'purple', number: 2, fill: 'empty', shape: 'oval', img: ''},
  {color: 'purple', number: 3, fill: 'empty', shape: 'oval', img: ''},
  {color: 'purple', number: 1, fill: 'shaded', shape: 'oval', img: ''},
  {color: 'purple', number: 2, fill: 'shaded', shape: 'oval', img: ''},
  {color: 'purple', number: 3, fill: 'shaded', shape: 'oval', img: ''},
  {color: 'purple', number: 1, fill: 'full', shape: 'oval', img: ''},
  {color: 'purple', number: 2, fill: 'full', shape: 'oval', img: ''},
  {color: 'purple', number: 3, fill: 'full', shape: 'oval', img: ''},

  {color: 'red', number: 1, fill: 'empty', shape: 'rectangle', img: ''},
  {color: 'red', number: 2, fill: 'empty', shape: 'rectangle', img: ''},
  {color: 'red', number: 3, fill: 'empty', shape: 'rectangle', img: ''},
  {color: 'red', number: 1, fill: 'shaded', shape: 'rectangle', img: ''},
  {color: 'red', number: 2, fill: 'shaded', shape: 'rectangle', img: ''},
  {color: 'red', number: 3, fill: 'shaded', shape: 'rectangle', img: ''},
  {color: 'red', number: 1, fill: 'full', shape: 'rectangle', img: ''},
  {color: 'red', number: 2, fill: 'full', shape: 'rectangle', img: ''},
  {color: 'red', number: 3, fill: 'full', shape: 'rectangle', img: ''},
  {color: 'green', number: 1, fill: 'empty', shape: 'rectangle', img: ''},
  {color: 'green', number: 2, fill: 'empty', shape: 'rectangle', img: ''},
  {color: 'green', number: 3, fill: 'empty', shape: 'rectangle', img: ''},
  {color: 'green', number: 1, fill: 'shaded', shape: 'rectangle', img: ''},
  {color: 'green', number: 2, fill: 'shaded', shape: 'rectangle', img: ''},
  {color: 'green', number: 3, fill: 'shaded', shape: 'rectangle', img: ''},
  {color: 'green', number: 1, fill: 'full', shape: 'rectangle', img: ''},
  {color: 'green', number: 2, fill: 'full', shape: 'rectangle', img: ''},
  {color: 'green', number: 3, fill: 'full', shape: 'rectangle', img: ''},
  {color: 'purple', number: 1, fill: 'empty', shape: 'rectangle', img: ''},
  {color: 'purple', number: 2, fill: 'empty', shape: 'rectangle', img: ''},
  {color: 'purple', number: 3, fill: 'empty', shape: 'rectangle', img: ''},
  {color: 'purple', number: 1, fill: 'shaded', shape: 'rectangle', img: ''},
  {color: 'purple', number: 2, fill: 'shaded', shape: 'rectangle', img: ''},
  {color: 'purple', number: 3, fill: 'shaded', shape: 'rectangle', img: ''},
  {color: 'purple', number: 1, fill: 'full', shape: 'rectangle', img: ''},
  {color: 'purple', number: 2, fill: 'full', shape: 'rectangle', img: ''},
  {color: 'purple', number: 3, fill: 'full', shape: 'rectangle', img: ''}
];

generateCards = () => {
  allTheCards = shuffle(allTheCards);
  currentCards = [];
  while(currentCards.length < 12){
    currentCards.push(allTheCards.pop());
  }
};


shuffle = (array) => {
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

checkForSet = () => {

};

generateCards();

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'green',
      selected: false,
      backgroundColor: '#CCC'
    };
  }

  handlePress(){
    if(this.state.color === 'green'){
      this.setState({color: 'red', selected: true, backgroundColor: 'white'});
    } else {
      this.setState({color: 'green', selected: false, backgroundColor: '#CCC'});
    }
  }

  render() {
    // add backgroundColor to styles.item immutably via object.assign
    return (
      <TouchableHighlight style={styles.item} onPress={() => this.handlePress()} underlayColor='white'>
        <Text
        style={{color: this.state.color, fontSize: 15}}>
          {this.props.cardNumber} {this.props.cardColor} {this.props.cardFill} {this.props.cardShape}
        </Text>
      </TouchableHighlight>
    );
  }
}

class SetProject extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.overarch}>
        <View style={styles.title}>
          <Text>Cards</Text>
        </View>
        <View style={styles.container}>
          {currentCards.map((card) => {
            return (
              <Button cardColor={card.color} cardNumber={card.number} cardFill={card.fill} cardShape={card.shape}></Button>
            )
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flex: .2,
    justifyContent: 'center'
  },
  overarch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
   item: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     margin: 10,
     width: 100,
     height: 100,
     borderWidth: 1,
     margin: 1
   },
});


AppRegistry.registerComponent('SetProject', () => SetProject);
