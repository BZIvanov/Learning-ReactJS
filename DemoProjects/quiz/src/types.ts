export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type Answers = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

export type QuestionsState = Question & { answers: string[] };
