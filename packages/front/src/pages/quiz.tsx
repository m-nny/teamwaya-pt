import React, { FC, useEffect, useState } from 'react';
import { getQuiz } from '../api/get-quiz';
import { CreateResponse, saveResponse } from '../api/save-response';
import { QuizEntity, ResponseEntity } from '../api/types';
import { QuizQuestions } from '../components/quiz-questions';
import { QuizResults } from '../components/quiz-results';
import { StartQuiz } from '../components/start-quiz';
import { ErrorCard, LoadingCard } from '../components/styled';

const useQuiz = () => {
  const [quiz, setQuiz] = useState<QuizEntity>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();
  useEffect(() => {
    getQuiz()
      .then((quiz) => {
        setQuiz(quiz);
        setLoading(false);
        setError(undefined);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, []);
  return { quiz, loading, error };
};
const useResponse = ({
  answers,
  quizId,
  username,
}: Partial<CreateResponse>) => {
  const [response, setResponse] = useState<ResponseEntity>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();
  useEffect(() => {
    if (!(answers && quizId && username)) {
      return;
    }
    setLoading(true);
    saveResponse({ answers, quizId, username })
      .then((quiz) => {
        setResponse(quiz);
        setLoading(false);
        setError(undefined);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [answers, quizId, username]);
  return { response, loading, error };
};

enum QuizStage {
  Start = 'START',
  Ongoing = 'ONGOING',
  Finished = 'FINISHED',
}

export const QuizPage: FC = () => {
  const { quiz, loading: quizLoading } = useQuiz();
  const [username, setUsername] = useState<string>();
  const [stage, setStage] = useState(QuizStage.Start);
  const [answers, setAnswers] = useState<number[]>();
  const {
    response,
    error,
    loading: responseLoading,
  } = useResponse({ answers, username: username, quizId: quiz?.id });
  if (quizLoading || responseLoading) {
    return <LoadingCard />;
  }
  if (!quiz) {
    return <ErrorCard />;
  }
  if (error) {
    return <ErrorCard error={error} />;
  }
  console.log({ stage, quiz, username, answers, response });
  if (stage === QuizStage.Start) {
    const handleStartQuiz = (name: string) => {
      setUsername(name);
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
    if (!response) {
      return <ErrorCard />;
    }
    return <QuizResults response={response} />;
  }
  return <ErrorCard />;
};
