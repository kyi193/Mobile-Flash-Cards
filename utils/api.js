import { AsyncStorage } from 'react-native'

export const FLASHCARD_STORAGE_KEY = 'Udacity:FlashCards';

export const clearDecks = () => {
  AsyncStorage.clear()
}
export const retrieveDecks = () => {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then(results => {
      const data = JSON.parse(results)
      return data
    })
}

export const saveDeck = (deckID, deckTitle) => {
  return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
    [deckID]: {
      name: deckTitle,
      id: deckID,
      cards: []
    }
  }))
}

export const saveCard = (id, question, answer) => {
  AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then(results => {
      let state = JSON.parse(results)

      const flashCard = {
        question: question,
        answer: answer
      }
      state[id].cards.push(flashCard)
      return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify(state))
    })
}
