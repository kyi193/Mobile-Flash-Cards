import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import DeckList from './components/DeckList'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DeckList />
      </View>
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
