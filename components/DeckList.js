import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { retrieveDecks } from '../utils/api'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import DeckDetails from './DeckDetails'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { offYellow } from '../utils/colors'
class DeckList extends Component {
  render() {
    const { decks } = this.props
    return Object.keys(decks).length > 0 ? (
      <View>
        <Text style={styles.header}>Your Decks</Text>
        <FlatList
          style={styles.deck}
          data={Object.values(decks)}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.container}
              onPress={() =>
                this.props.navigation.navigate("DeckSummary", {
                  id: item.id,
                  name: item.name,
                  totalCards: item.cards.length
                })}>
              <DeckDetails
                key={item.id}
                id={item.id}
                name={item.name}
                totalCards={item.cards.length}
              />
            </TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    minHeight: 120,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 2,
  },
  name: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 5
  },
  count: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 5
  },
  header: {
    fontSize: 50,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  deck: {
    width: 350,
    alignSelf: 'center',
    backgroundColor: offYellow,
  }
});
export default connect(mapStateToProps)(DeckList);
