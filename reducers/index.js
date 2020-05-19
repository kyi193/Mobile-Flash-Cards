import { ADD_DECK, RECEIVE_DECKS, ADD_CARD } from '../actions'
let newState;
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
        [action.id]: {
          id: action.id,
          name: action.name,
          cards: [],
        }
      }
    case ADD_CARD: {
      newState = { ...state }
      const flashCard = {
        question: action.question,
        answer: action.answer
      }
      newState[action.id].cards.push(flashCard)
      return newState;
    }
    default:
      return state
  }
}

export default decks;
