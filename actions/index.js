export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';
export const RECEIVE_DECKS = 'RECEIVE_DECKS'


export function addDeck(id, name) {
  return {
    type: ADD_DECK,
    id,
    name
  }
}

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}
