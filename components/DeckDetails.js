import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

function DeckDetails({ name, totalCards }) {
  return (
    <View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.count}>Flash Cards: {totalCards}</Text>
    </View>
  )
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
});

export default DeckDetails
