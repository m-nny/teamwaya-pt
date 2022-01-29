import React, { FC, useEffect, useState } from 'react';
import { getAllResponses } from '../api/get-all-responses';
import { ResponseEntity } from '../api/types';
import { QuizResponses } from '../components/responses';
import { ErrorCard, LoadingCard } from '../components/styled';

const useResponses = () => {
  const [responses, setResponses] = useState<ResponseEntity[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();
  useEffect(() => {
    getAllResponses()
      .then((quiz) => {
        setResponses(quiz);
        setLoading(false);
        setError(undefined);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, []);
  return { responses, loading, error };
};

export const AllResponsesPage: FC = () => {
  const { responses, loading, error } = useResponses();
  console.log({ responses, loading, error });
  if (loading) {
    return <LoadingCard />;
  }
  if (!responses) {
    return <ErrorCard />;
  }
  if (error) {
    return <ErrorCard error={error} />;
  }
  return <QuizResponses responses={responses} />;
};
