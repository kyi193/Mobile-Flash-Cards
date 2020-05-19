import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function DeckDetails({ id, name, totalCards }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.count}>Flash Cards: {totalCards}</Text>
    </TouchableOpacity>
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
