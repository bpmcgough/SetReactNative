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

// this was the button previously
// <Text
// style={{color: this.props.card.selectColor, fontSize: 15}}>
//   {this.props.card.number} {this.props.card.color} {this.props.card.fill} {this.props.card.shape}
// </Text>

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'green',
      backgroundColor: '#CCC'
    };
  }

  render() {
    console.log('this.props.card: ', this.props.card)
    return (
      <TouchableHighlight style={styles.item} onPress={() => (this.props.handlePress.bind(this))(this.props.card)} underlayColor='white'>
        <Image
          source={this.props.card.img}
        /> // this shit is not working, need to manually require the mfer
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
      // this.setState({color: 'green', backgroundColor: '#CCC'});
      card.selectColor = 'green'
      selectedCards = selectedCards.filter( el => el !== card);
    }
    if(selectedCards.length === 3 && Helpers.checkForSet(selectedCards)){
      console.log('ayyyyy')
      handleFoundSet(selectedCards);
      this.forceUpdate();
    }
    this.forceUpdate();
    console.log('selectedCards: ', selectedCards, Helpers.checkForSet(selectedCards))
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
              <Button card={card} handlePress={this.handlePress}></Button>
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
