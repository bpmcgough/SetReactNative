import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView,
  Image
} from 'react-native';
import _ from 'underscore';
import Helpers from './theDirectory/helpers';
import Cards from './theDirectory/allTheCards';

let allTheCards = Cards.allTheCards;
let selectedCards = [];
let usedCards = [];
let currentCards = [];

generateCards = Helpers.generateCards;
shuffle = Helpers.shuffle;
checkForSet = Helpers.checkForSet;

generateCards = () => {
  allTheCards = Helpers.shuffle(allTheCards);
  currentCards = [];
  while(currentCards.length < 12){
    currentCards.push(allTheCards.pop());
  }
};

handleFoundSet = () => {
  currentCards = currentCards.filter(el => {
    let shouldReturn = true;
    selectedCards.forEach(card => {
      if(card.id === el.id){
        shouldReturn = false;
      }
    });
    if(shouldReturn) return el;
	});

  usedCards = usedCards.concat(selectedCards);

  selectedCards = [];

  for(let i = 0; i < 3; i++){
    currentCards.push(allTheCards.pop());
  }
};

generateCards();

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'green',
      backgroundColor: '#CCC'
    };
  }

  render() {
    return (
      <TouchableHighlight style={styles.item} onPress={() => (this.props.handlePress.bind(this))(this.props.card)} underlayColor='white'>
        <Image
          source={this.props.card.img} resizeMode='center'
        />
      </TouchableHighlight>
    );
  }
}

class SetProject extends Component {
  constructor(props) {
    super(props);
  }

  handlePress(card){
    if(card.selectColor === 'green'){
      card.selectColor = 'red';
      selectedCards.push(card);
    } else {
      card.selectColor = 'green'
      selectedCards = selectedCards.filter( el => el !== card);
    }
    if(selectedCards.length === 3 && Helpers.checkForSet(selectedCards)){
      handleFoundSet(selectedCards);
    }
  }

  doTheUpdate(){
    this.forceUpdate()
  }

  render() {
    let cardsArray = currentCards.map((card) => {
      return (
        <Button card={card} handlePress={this.handlePress}></Button>
      )
    });
    return (
      <View style={styles.overarch}>
        <View style={styles.title}>
          <Text>Cards</Text>
        </View>
        <TouchableHighlight onPress={this.doTheUpdate.bind(this)}>
          <Text style={styles.welcome}>Submit Set</Text>
        </TouchableHighlight>
        <View style={styles.container}>
          {cardsArray}
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
