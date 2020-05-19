import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { retrieveDecks } from '../utils/api'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import DeckDetails from './DeckDetails'
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
    console.log(decks)
    const deckList = Object.keys(decks)
    return Object.keys(decks).length > 0 ? (
      <View>
        {deckList.map(deck => (
          <FlatList
            key={deck.id}
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
        ))}
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
