import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

let currentCards;

const allCards = [
  '1 Red Empty Diam',
  '2 Red Empty Diam',
  '3 Red Empty Diam',
  '1 Purp Empty Diam',
  '2 Purp Empty Diam',
  '3 Purp Empty Diam',
  '1 Green Empty Diam',
  '2 Green Empty Diam',
  '3 Green Empty Diam',
  '1 Red Empty Oval',
  '2 Red Empty Oval',
  '3 Red Empty Oval',
  '1 Green Empty Oval',
  '2 Green Empty Oval',
  '3 Green Empty Oval',
  '1 Blue Empty Oval',
  '2 Blue Empty Oval',
  '3 Blue Empty Oval',
  '1 Red Empty Rect',
  '2 Red Empty Rect',
  '3 Red Empty Rect',
  '1 Green Empty Rect',
  '2 Green Empty Rect',
  '3 Green Empty Rect',
  '1 Blue Empty Rect',
  '2 Blue Empty Rect',
  '3 Blue Empty Rect'
];

generateCards = () => {
  allCards = shuffle(allCards);
  currentCards = [];
  while(currentCards.length < 12){
    currentCards.push(allCards.pop());
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

generateCards();

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'green',
      selected: false
    };
  }

  handlePress(){
    if(this.state.color === 'green'){
      this.setState({color: 'red', selected: true});
    } else {
      this.setState({color: 'green', selected: false});
    }
  }

  render() {
    return (
      <TouchableHighlight style={styles.item} onPress={() => this.handlePress()} underlayColor='white'>
        <Text
        style={{color: this.state.color, fontSize: 15}}>
          {this.props.cardName}
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
              <Button cardName={card}></Button>
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
     backgroundColor: '#CCC',
     margin: 10,
     width: 100,
     height: 100,
     borderWidth: 1,
     margin: 1
   },
});


AppRegistry.registerComponent('SetProject', () => SetProject);
