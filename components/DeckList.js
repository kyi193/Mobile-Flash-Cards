import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { retrieveDecks } from '../utils/api'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
class DeckList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      deckList: []
    }
  }
  componentDidUpdate() {
  }
  componentDidMount() {
  }
  render() {

    return (
      <View>
        <Text>This is the Deck List</Text>
      </View>
    )
  }
}

export default connect()(DeckList);
