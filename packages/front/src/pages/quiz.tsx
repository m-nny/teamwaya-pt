import React, { FC, useEffect, useState } from 'react';
import { QuizQuestion } from '../components/question';
import { StartQuiz } from '../components/start-quiz';
import { ErrorCard, StyledCard } from '../components/styled';
import { mockQuiz, Quiz } from '../etc';

const useQuiz = () => {
  const [quiz, setQuiz] = useState<Quiz>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const tm = setTimeout(() => {
      setQuiz(mockQuiz);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(tm);
  });
  return { quiz, loading };
};

enum QuizState {
  Start,
  Ongoing,
  Finished,
}

export const QuizPage: FC = () => {
  const { quiz, loading } = useQuiz();
  const [name, setName] = useState<string>();
  const [stage, setStage] = useState(QuizState.Start);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  if (loading) {
    return <StyledCard loading />;
  }
  if (!quiz) {
    return <ErrorCard />;
  }
  if (stage === QuizState.Start) {
    const handleStartQuiz = (name: string) => {
      setName(name);
      setStage(QuizState.Ongoing);
    };
    return <StartQuiz quizTitle={quiz.title} onStart={handleStartQuiz} />;
  }
  if (stage === QuizState.Ongoing) {
    const question = quiz.questions[currentQuestion];
    const handleNext = (answerIdx: number) => {
      setAnswers([...answers, answerIdx]);
      setCurrentQuestion(currentQuestion + 1);
    };
    return (
      <QuizQuestion
        question={question}
        currentQuestion={currentQuestion + 1}
        totalQuestions={quiz.questions.length}
        onNext={handleNext}
      />
    );
  }
  return <ErrorCard />;
};
