import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { addDeck } from '../actions'
import { saveDeck } from '../utils/api'

class AddDeck extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: '',
    }
  }
  render() {
    return (
      <View>
        <Text>What is the topic of this deck?</Text>
      </View>
    )
  }
}

export default AddDeck
