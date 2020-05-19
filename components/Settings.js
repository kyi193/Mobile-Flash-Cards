import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { clearDecks } from '../utils/api'
import { connect } from 'react-redux'
import { clearDeck } from '../actions'
class Settings extends Component {
  clearDeck = () => {
    const { dispatch } = this.props
    dispatch(clearDeck(null))
    clearDecks()
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 40, paddingBottom: 200 }}>Settings</Text>
        <TouchableOpacity
          onPress={this.clearDeck}>
          <Text>Clear Decks</Text>
        </TouchableOpacity>
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

})
export default connect()(Settings)
