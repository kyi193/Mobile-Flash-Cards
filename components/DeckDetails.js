import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

function DeckDetails({ id, name, totalCards }) {
  return (
    <TouchableOpacity>
      <Text>Name: {name}</Text>
      <Text>Cards: {totalCards}</Text>
    </TouchableOpacity>
  )
}

export default DeckDetails
