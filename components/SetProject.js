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
import Helpers from '../theDirectory/helpers';
import Cards from '../theDirectory/allTheCards';
import Button from './button'

let allTheCards = Cards;
let selectedCards = [];
let usedCards = [];
let currentCards = [];

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


export default class SetProject extends Component {
  constructor(props) {
    super(props);
  }

  handlePress(card){
    if(card.selected === false){
      card.selected = true;
      selectedCards.push(card);
    } else {
      card.selected = false;
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
        <View>
          <TouchableHighlight onPress={this.doTheUpdate.bind(this)} style={styles.submit}>
            <Text style={styles.welcome}>Submit Set/Update</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={generateCards} style={styles.submit}>
            <Text style={styles.welcome}>Generate Cards (then press update)</Text>
          </TouchableHighlight>
        </View>
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
  submit: {
    flex: .2,
    justifyContent: 'center',
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
  image: {
    width: 100,
    height: 100
  }
});
