import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import { addDeck } from './actions';
import reducer from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <AddDeck />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
