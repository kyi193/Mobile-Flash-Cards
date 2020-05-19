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

  render() {
    const { decks } = this.props
    return Object.keys(decks).length > 0 ? (
      <View>
        <Text>{Object.keys(decks)}</Text>
      </View>
    )
      : (
        <View>
          <Text>Nothing to Show</Text>
        </View>
      )
  }
}
function mapStateToProps(decks) {
  return {
    decks,
  }
}
export default connect(mapStateToProps)(DeckList);
