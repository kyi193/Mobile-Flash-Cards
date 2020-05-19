import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { retrieveDecks } from '../utils/api'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import DeckDetails from './DeckDetails'
class DeckList extends Component {
  render() {
    const { decks } = this.props
    return Object.keys(decks).length > 0 ? (
      <View>
        <FlatList
          data={Object.values(decks)}
          renderItem={({ item }) => (
            <DeckDetails
              key={item.id}
              id={item.id}
              name={item.name}
              totalCards={item.cards.length}
            />
          )}
          keyExtractor={item => item.id}
        />
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
