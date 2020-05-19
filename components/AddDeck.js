import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Platform, Alert } from 'react-native'
import { addDeck } from '../actions'
import { saveDeck } from '../utils/api'
import { blue, white, lightGreen } from '../utils/colors'
import { connect } from 'react-redux'
import { generateUID } from '../utils/helpers'

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios'
        ? styles.iosSubmitBtn
        : styles.androidSubmitBtn}
      onPress={onPress}>
      <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  )
}

class AddDeck extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: '',
    }
  }
  createTwoButtonAlert = () =>
    Alert.alert(
      "Error",
      "Please type in a topic!",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

  onChangeText = (text) => {
    this.setState(() => ({
      input: text
    }))
  }

  submit = () => {
    const { dispatch } = this.props;
    const deckTitle = this.state.input
    const deckID = generateUID();
    if (deckTitle.length < 1) {
      this.createTwoButtonAlert()
      return
    }
    dispatch(addDeck(deckID, deckTitle))
    saveDeck(deckID, deckTitle)

    this.setState(() => ({
      input: '',
    }))

    this.props.navigation.navigate('Deck List')
  }
  render() {
    const { input } = this.state
    return (
      <View styles={styles.container}>
        <Text style={styles.question}>What is the topic of this deck?</Text>
        <TextInput
          style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 25, alignSelf: 'center' }}
          onChangeText={text => this.onChangeText(text)}
          placeholder='  Enter topic here....'
          value={input}
        />
        <SubmitBtn onPress={this.submit} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iosSubmitBtn: {
    backgroundColor: lightGreen,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  androidSubmitBtn: {
    backgroundColor: blue,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  question: {
    textAlign: 'center',
    paddingTop: 200,
    fontSize: 30
  }
})

export default connect()(AddDeck)
