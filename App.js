import React, { Component } from 'react';
import { Platform, StatusBar, View, StyleSheet } from 'react-native';
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import { addDeck } from './actions';
import reducer from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import middleware from './middleware'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { purple, white } from "./utils/colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, composeWithDevTools(middleware))}>
        <View style={styles.container}>
          <DeckList />
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
