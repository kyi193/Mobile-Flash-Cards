import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { blue, lightGreen, white, tomatoRed } from '../utils/colors'
import { connect } from 'react-redux'

const questionPercentage = (numerator, denominator) => {
  return ((numerator / denominator) * 100).toFixed(0)
}

function CorrectBtn({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios'
        ? styles.iosCorrectBtn
        : styles.androidCorrectBtn}
      onPress={onPress}>
      <Text style={styles.correctBtnText}>Correct</Text>
    </TouchableOpacity>
  )
}
function IncorrectBtn({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios'
        ? styles.iosIncorrectBtn
        : styles.androidIncorrectBtn}
      onPress={onPress}>
      <Text style={styles.incorrectBtnText}>Wrong</Text>
    </TouchableOpacity>
  )
}
class Quiz extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questionsAnswered: 0,
      correctAnswers: 0,
      seeAnswerToggle: false
    }
  }

  toggleAnswer = () => {
    this.setState({
      seeAnswerToggle: !this.state.seeAnswerToggle
    })
  }

  submitCorrect = () => {
    this.setState({
      questionsAnswered: this.state.questionsAnswered + 1,
      correctAnswers: this.state.correctAnswers + 1,
      seeAnswerToggle: false,
    })
  }

  submitIncorrect = () => {
    this.setState({
      questionsAnswered: this.state.questionsAnswered + 1,
      seeAnswerToggle: false,
    })
  }
  render() {
    const { questionList } = this.props
    const { questionsAnswered, correctAnswers, seeAnswerToggle } = this.state
    const deckLength = questionList.length
    return (
      <View style={styles.container}>
        {questionsAnswered === deckLength
          ? <View>
            <Text style={styles.correctQuestions}>You got {correctAnswers} questions correct!</Text>
            {questionPercentage(correctAnswers, deckLength) > 75
              ? <Text style={styles.goodPercentage}>{questionPercentage(correctAnswers, deckLength)}%</Text>
              : <Text style={styles.badPercentage}>{questionPercentage(correctAnswers, deckLength)}%</Text>
            }

          </View>
          : <View style={styles.results}>
            <Text style={styles.question}>{questionList[questionsAnswered].question}?</Text>
            <TouchableOpacity
              onPress={this.toggleAnswer}>
              {seeAnswerToggle
                ? <Text style={styles.answer}>
                  {questionList[questionsAnswered].answer}
                </Text>
                : <Text style={styles.answer}>
                  Click To See Answer
                  </Text>}
            </TouchableOpacity>
            <CorrectBtn onPress={this.submitCorrect} />
            <IncorrectBtn onPress={this.submitIncorrect} />
          </View>}


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
  question: {
    fontSize: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  answer: {
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iosCorrectBtn: {
    backgroundColor: lightGreen,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  androidCorrectdBtn: {
    backgroundColor: lightGreen,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  correctBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  iosIncorrectBtn: {
    backgroundColor: tomatoRed,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  androidIncorrectBtn: {
    backgroundColor: tomatoRed,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  incorrectBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  badPercentage: {
    color: tomatoRed,
    fontSize: 120,
    textAlign: 'center',
  },
  goodPercentage: {
    color: lightGreen,
    fontSize: 120,
    textAlign: 'center',
  },
  correctQuestions: {
    justifyContent: 'flex-start',
    fontSize: 40,
    paddingBottom: 60,
    textAlign: 'center'
  },
  results: {
    justifyContent: 'flex-start'
  }
})
function mapStateToProps(state, { route }) {
  const { id } = route.params;
  const questionList = state[id].cards;
  console.log("QUESTION LIST: ", questionList)
  return {
    questionList,
  }
}
export default connect(mapStateToProps)(Quiz)
