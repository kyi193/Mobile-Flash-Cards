import { ADD_DECK, RECEIVE_DECKS } from '../actions'

const decks = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      return {
        ...state,
        [action.name]: {
          id: action.id,
          name: action.name,
          cards: [],
        }
      }
  }
}

export default decks;
