const data = {
  Poker: {
    title: 'Poker',
    questions: [
      {
        question: 'What is the best hand dealt in No Limit Texas Hold Em?',
        answer: 'Pocket Aces'
      },
      {
        question: 'Which position acts the last after post flop?',
        answer: 'The button'
      }
    ]
  }
}

export const getInitialData = () => {
  return data;
}
