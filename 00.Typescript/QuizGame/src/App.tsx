import React from 'react';
import { fetchQuizQuestions } from './API';
import { Difficulty } from './API';

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
  const startTrivia = async () => {
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    console.log(newQuestions);
  };

  startTrivia();

  return <div>Quiz game</div>;
};

export default App;
