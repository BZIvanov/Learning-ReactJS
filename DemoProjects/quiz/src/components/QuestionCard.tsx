import type { MouseEvent } from "react";

import type { Answers } from "../types";
import styles from "./QuestionCard.module.css";

type QuestionCardProps = {
  question: string;
  answers: string[];
  callback: (e: MouseEvent<HTMLButtonElement>) => void;
  userAnswer: Answers | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}: QuestionCardProps) => (
  <div className={styles.card}>
    <p>
      Question: {questionNr} / {totalQuestions}
    </p>

    <p dangerouslySetInnerHTML={{ __html: question }} />

    <div>
      {answers.map((answer) => {
        const correct = userAnswer?.correctAnswer === answer;
        const userClicked = userAnswer?.answer === answer;

        const btnStyles = correct
          ? "linear-gradient(90deg, #56FFA4, #59BC86)"
          : !correct && userClicked
          ? "linear-gradient(90deg, #FF5656, #C16868)"
          : "linear-gradient(90deg, #56ccff, #6eafb4)";

        return (
          <div key={answer} className={styles.answerBox}>
            <button
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
              className={styles.answerBtn}
              style={{ background: btnStyles }}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        );
      })}
    </div>
  </div>
);

export default QuestionCard;
