import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { getInitialData } from '../utils/api'

class DeckList extends Component {
  render() {
    const decks = getInitialData();
    return (
      <View>
        {Object.keys(decks).map((deck) => {
          const { title, questions } = decks[deck]
          console.log(questions)
          return (
            <View key={deck}>
              <Text>{title}</Text>
              <Text>{questions.length}</Text>
            </View>
          )
        })}
      </View>
    )
  }
}

export default DeckList;
