import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { addDeck } from '../actions'
import { saveDeck } from '../utils/api'

class AddDeck extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: '',
    }
    this.onChangeText = this.onChangeText.bind(this)
  }

  onChangeText(text) {
    this.setState(() => ({
      input: text
    }))
  }

  render() {
    const { input } = this.state
    return (
      <View>
        <Text>What is the topic of this deck?</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.onChangeText(text)}
          value={input}
        />
      </View>
    )
  }
}

export default AddDeck
