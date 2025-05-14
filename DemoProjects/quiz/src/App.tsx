import { useState, type MouseEvent } from "react";

import QuestionCard from "./components/QuestionCard";
import { fetchQuizQuestions, Difficulty } from "./api";
import type { Answers, QuestionsState } from "./types";
import styles from "./App.module.css";

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [userAnswers, setUserAnswers] = useState<Answers[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [number, setNumber] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQ = number + 1;

    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>REACT QUIZ</h1>

      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className={styles.startBtn} onClick={startTrivia}>
          Start
        </button>
      ) : null}

      {!gameOver ? <p className={styles.score}>Score: {score}</p> : null}

      {loading ? <p className={styles.score}>Loading Questions...</p> : null}

      {!loading && !gameOver && (
        <QuestionCard
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}

      {!gameOver &&
      !loading &&
      userAnswers.length === number + 1 &&
      number !== TOTAL_QUESTIONS - 1 ? (
        <button className={styles.nextBtn} onClick={nextQuestion}>
          Next Question
        </button>
      ) : null}
    </div>
  );
};

export default App;
