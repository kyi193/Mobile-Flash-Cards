import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
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
  render() {
    const { questionList } = this.props
    const { questionsAnswered, correctAnswers, seeAnswerToggle } = this.state
    const deckLength = questionList.length
    return (
      <View>
        {questionList === deckLength
          ? <View>
            <Text>You got {correctAnswers} questions correct!</Text>
          </View>
          : <View>
            <Text>{questionList[questionsAnswered].question}?</Text>
            <TouchableOpacity
              onPress={this.toggleAnswer}>
              {seeAnswerToggle
                ? <Text>
                  {questionList[questionsAnswered].answer}
                </Text>
                : <Text>
                  See Answer
                  </Text>}
            </TouchableOpacity>
          </View>}


      </View>
    )
  }
}
function mapStateToProps(state, { route }) {
  const { id } = route.params;
  const questionList = state[id].cards;
  console.log("QUESTION LIST: ", questionList)
  return {
    questionList,
  }
}
export default connect(mapStateToProps)(Quiz)
