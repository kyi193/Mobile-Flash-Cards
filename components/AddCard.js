import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'

class AddCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      question: '',
      answer: '',
    }
  }
  render() {
    const { question, answer } = this.state
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 25, paddingBottom: 30 }}>What card would you like to add?</Text>
        <TextInput
          style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 25 }}
          onChangeText={text => this.onChangeText(text)}
          value={question}
          placeholder='  Question'
        />
        <TextInput
          style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 25 }}
          onChangeText={text => this.onChangeText(text)}
          value={answer}
          placeholder='  Answer'
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default AddCard
