import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'

class AddCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      question: '',
      answer: '',
    }
  }

  setTitle = (name) => {
    if (!name) return;
    const title = `Add flash card ${name}`
    this.props.navigation.setOptions({
      title: title,
    });
  };

  render() {
    const { question, answer } = this.state
    const { name } = this.props;
    this.setTitle(name)
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

function mapStateToProps(state, { route }) {
  console.log(route.params)
  const { name } = route.params
  return {
    name
  }
}
export default connect(mapStateToProps)(AddCard)
