import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Platform, StatusBar, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { blue, lightGreen, white, tomatoRed } from '../utils/colors'


function AddCardBtn({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios'
        ? styles.iosAddCardBtn
        : styles.androidAddCardBtn}
      onPress={onPress}>
      <Text style={styles.addCardBtnText}>Add Card</Text>
    </TouchableOpacity>
  )
}

function QuizBtn({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios'
        ? styles.iosQuizBtn
        : styles.androidQuizBtn}
      onPress={onPress}>
      <Text style={styles.quizBtnText}>Quiz Yourself!</Text>
    </TouchableOpacity>
  )
}

class DeckSummary extends Component {
  setTitle = (name) => {
    if (!name) return;
    this.props.navigation.setOptions({
      title: name
    });
  };
  render() {
    const { id, name, totalCards } = this.props
    this.setTitle(name);
    let cards;
    switch (totalCards) {
      case 1:
        cards = 'card'
      default:
        cards = 'cards'
    }

    return (
      <View style={styles.container}>
        <Text style={styles.cards}>You have: {totalCards} {cards}</Text>
        <AddCardBtn
          onPress={() =>
            this.props.navigation.navigate("AddCard")} />
        <QuizBtn />
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
  cards: {
    fontSize: 30,
    paddingBottom: 40,
  },
  iosAddCardBtn: {
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
  androidAddCardBtn: {
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
  addCardBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  iosQuizBtn: {
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
  androidQuizBtn: {
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
  quizBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  }
})

function mapStateToProps(state, { route }) {
  const { name, id, totalCards } = route.params;
  return {
    name,
    id,
    totalCards,
  }
}
export default connect(mapStateToProps)(DeckSummary)
