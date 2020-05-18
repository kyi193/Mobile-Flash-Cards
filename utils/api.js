import { AsyncStorage } from 'react-native'

export const FLASHCARD_STORAGE_KEY = 'Udacity:FlashCards';

export const retrieveDecks = () => {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then(results => {
      const data = JSON.parse(results)
      return data
    })
}

export const saveDeck = (deck) => {
  return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({ [deck.id]: deck }))
}
