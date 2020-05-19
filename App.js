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
import { purple, white, lightGray, steelBlue } from "./utils/colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from '@react-navigation/stack';
import Constants from "expo-constants";
import DeckSummary from './components/DeckSummary'

const Tabs = createBottomTabNavigator()

const TabNav = () => (
  <Tabs.Navigator
    initialRouteName="AddDeck"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let icon;
        if (route.name === "Add Deck") {
          icon = (
            <FontAwesome name="plus-square" size={size} color={color} />
          );
        } else if (route.name === "Deck List") {
          icon = (
            <Ionicons name="ios-bookmarks" size={size} color={color} />
          );
        }
        return icon;
      }
    })}
    tabBarOptions={{
      header: null,
      activeTintColor: Platform.OS === "ios" ? lightGray : lightGray,
      inactiveTintColor: Platform.OS === 'ios' ? white : white,
      showIcon: true,
      style: {
        height: 80,
        backgroundColor: Platform.OS === "ios" ? steelBlue : purple,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }}
  >
    <Tabs.Screen name="Add Deck" component={AddDeck} />
    <Tabs.Screen name="Deck List" component={DeckList} />
  </Tabs.Navigator>
);

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Stack = createStackNavigator();
const MainNav = () => (
  <Stack.Navigator headerMode="screen">
    <Stack.Screen
      name="Home"
      component={TabNav}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="DeckSummary"
      component={DeckSummary}
      options={{
        headerTintColor: white,
        headerStyle: {
          backgroundColor: steelBlue,
        }
      }} />
  </Stack.Navigator>
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, composeWithDevTools(middleware))}>
        <View style={styles.container}>
          <NavigationContainer>
            <UdaciStatusBar backgroundColor={steelBlue} barStyle="light-content" />
            <MainNav />
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
