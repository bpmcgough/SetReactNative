import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Image
} from 'react-native';
import _ from 'underscore';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'blue',
      style: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       margin: 5,
       width: 100,
       height: 100,
       borderWidth: 1,
       backgroundColor: 'white'
      },
    };
  }

  handleChange() {
    (this.props.handlePress.bind(this))(this.props.card);
    let style = _.extend({}, this.state.style);
    style.backgroundColor = (style.backgroundColor === 'white' ? '#CCC' : 'white');
    this.setState({style});
  }

  render() {
    if(this.props.card){
      console.log('this.props.card: ', this.props.card)
      return (
        <TouchableHighlight style={this.state.style} onPress={this.handleChange.bind(this)}>
          <Image
            source={this.props.card.img} resizeMode='center' style={styles.image}
          />
        </TouchableHighlight>
      );
    } else {
      return (
        <TouchableHighlight style={this.state.style} onPress={this.handleChange.bind(this)}>
          <Text>Empty</Text>
        </TouchableHighlight>
      )
    }

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
