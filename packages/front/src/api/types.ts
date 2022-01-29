export type AnswerEntity = {
  text: string;
  score: number;
};

export type QuestionEntity = {
  id: number;
  text: string;
  answers: AnswerEntity[];
};

export type QuizEntity = {
  id: number;
  title: string;
  questions: QuestionEntity[];
};

export type ResponseEntity = {
  id: number;
  quizId: number;
  username: string;
  answers: number[];
  score: number;
  verdict: number;
};
