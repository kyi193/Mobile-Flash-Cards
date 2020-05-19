import { ADD_DECK, RECEIVE_DECKS } from '../actions'

const decks = (state = {}, action) => {
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
    default:
      return state
  }
}

export default decks;
