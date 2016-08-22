import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView
} from 'react-native';
import _ from 'underscore';
import Helpers from './theDirectory/helpers';
import Cards from './theDirectory/allTheCards';

// this is why I should store cards on state
let allTheCards = Cards.allTheCards;
let usedCards = Cards.usedCards;
let selectedCards = Cards.selectedCards;
let currentCards;

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
  console.log('currentcards before: ', currentCards)

  currentCards = currentCards.filter(el => {
    let shouldReturn = true;
    selectedCards.forEach(card => {
      if(card.id === el.id){
        shouldReturn = false;
      }
    });
    if(shouldReturn) return el;
	});

  currentCards = currentCards.map(card => {card.color = 'green'; return card;});

  usedCards = usedCards.concat(selectedCards);

  selectedCards = [];

  for(let i = 0; i < 3; i++){
    currentCards.push(allTheCards.pop());
  }

  console.log('currentcards after: ', currentCards)
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

  render() {
    return (
      <TouchableHighlight style={styles.item} onPress={() => (this.props.handlePress.bind(this))()} underlayColor='white'>
        <Text
        style={{color: this.state.color, fontSize: 15}}>
          {this.props.number} {this.props.color} {this.props.fill} {this.props.shape}
        </Text>
      </TouchableHighlight>
    );
  }
}

class SetProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCards: [],
    }
  }

  handlePress(){
    if(this.state.color === 'green'){
      this.setState({color: 'red', selected: true, backgroundColor: 'white'});
      selectedCards.push(this.props);
    } else {
      this.setState({color: 'green', selected: false, backgroundColor: '#CCC'});
      selectedCards = selectedCards.filter( el => el !== this.props);
    }
    if(selectedCards.length === 3 && Helpers.checkForSet(selectedCards)){
      handleFoundSet();
    }
  }

  doTheUpdate(){
    this.forceUpdate()
  }

  render() {
    return (
      <View style={styles.overarch}>
        <View style={styles.title}>
          <Text>Cards</Text>
        </View>
        <TouchableHighlight onPress={this.doTheUpdate.bind(this)}>
          <Text style={styles.welcome}>Submit Set</Text>
        </TouchableHighlight>
        <View style={styles.container}>
          {currentCards.map((card) => {
            return (
              <Button selectColor={card.selectColor} color={card.color} number={card.number} fill={card.fill} shape={card.shape} id={card.id} handlePress={this.handlePress}></Button>
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
