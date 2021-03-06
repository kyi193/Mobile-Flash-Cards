import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Platform, Alert } from 'react-native'
import { connect } from 'react-redux'
import { blue, white, lightGreen } from '../utils/colors'
import { addCard } from '../actions'
import { saveCard } from '../utils/api'

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios'
        ? styles.iosSubmitBtn
        : styles.androidSubmitBtn}
      onPress={onPress}>
      <Text style={styles.submitBtnText}>Add flash card!</Text>
    </TouchableOpacity>
  )
}

class AddCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      question: '',
      answer: '',
    }
  }

  createTwoButtonAlert = () =>
    Alert.alert(
      "Error",
      "Please fill both sections in!",
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
  setTitle = (name) => {
    if (!name) return;
    const title = `Add flash card ${name}`
    this.props.navigation.setOptions({
      title: title,
    });
  };

  onChangeQuestionText = (text) => {
    this.setState(() => ({
      question: text
    }))
  }

  onChangeAnswerText = (text) => {
    this.setState(() => ({
      answer: text
    }))
  }

  submitCard = () => {
    const { dispatch } = this.props;
    const question = this.state.question
    const answer = this.state.answer
    const { id } = this.props
    if (question.length < 1 || answer.length < 1) {
      this.createTwoButtonAlert()
      return
    }
    dispatch(addCard(id, question, answer))
    saveCard(id, question, answer)

    this.setState(() => ({
      question: '',
      answer: '',
    }))

    this.toHome();
  }

  toHome = () => {
    this.props.navigation.navigate('Deck List')
  }

  render() {
    const { question, answer } = this.state
    const { name } = this.props;
    this.setTitle(name)
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 25, paddingBottom: 20 }}>What card would you like to add?</Text>
        <Text>Question</Text>
        <TextInput
          style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 25 }}
          onChangeText={text => this.onChangeQuestionText(text)}
          value={question}
          placeholder='  Question goes here...'
        />
        <Text>Answer</Text>
        <TextInput
          style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 25 }}
          onChangeText={text => this.onChangeAnswerText(text)}
          value={answer}
          placeholder='  Answer goes here...'
        />
        <SubmitBtn onPress={this.submitCard} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
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
})

function mapStateToProps(state, { route }) {
  const { name, id } = route.params
  return {
    name,
    id
  }
}
export default connect(mapStateToProps)(AddCard)
