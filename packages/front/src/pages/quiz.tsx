import React, { FC, useEffect, useState } from 'react';
import { QuizQuestions } from '../components/quiz-questions';
import { QuizResults } from '../components/quiz-results';
import { StartQuiz } from '../components/start-quiz';
import { ErrorCard, LoadingCard } from '../components/styled';
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

enum QuizStage {
  Start,
  Ongoing,
  Finished,
}

export const QuizPage: FC = () => {
  const { quiz, loading } = useQuiz();
  const [name, setName] = useState<string>();
  const [stage, setStage] = useState(QuizStage.Start);
  const [answers, setAnswers] = useState<number[]>();
  if (loading) {
    return <LoadingCard />;
  }
  if (!quiz) {
    return <ErrorCard />;
  }
  console.log({ stage, name, quiz, answers });
  if (stage === QuizStage.Start) {
    const handleStartQuiz = (name: string) => {
      setName(name);
      setStage(QuizStage.Ongoing);
    };
    return <StartQuiz quizTitle={quiz.title} onStart={handleStartQuiz} />;
  }
  if (stage === QuizStage.Ongoing) {
    const handleFinish = (selectedAnswers: number[]) => {
      setAnswers(selectedAnswers);
      setStage(QuizStage.Finished);
    };
    return <QuizQuestions questions={quiz.questions} onFinish={handleFinish} />;
  }
  if (stage === QuizStage.Finished) {
    if (!name || !answers || !quiz.id) {
      return <ErrorCard />;
    }
    return <QuizResults name={name} answers={answers} quizId={quiz.id} />;
  }
  return <ErrorCard />;
};
