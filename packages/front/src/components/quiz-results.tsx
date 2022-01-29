import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ErrorCard, LoadingCard, StyledCard, StyledTitle } from './styled';

export type QuizResultsProps = UseScoreArgs;

type UseScoreArgs = {
  name: string;
  quizId: number;
  answers: number[];
};
const useScore = (_: UseScoreArgs) => {
  const [score, setScore] = useState<number>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const tm = setTimeout(() => {
      setScore(20);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(tm);
  });
  return { score, loading };
};

export const QuizResults: FC<QuizResultsProps> = ({ ...scoreArgs }) => {
  const { score, loading } = useScore({ ...scoreArgs });
  if (loading) {
    return <LoadingCard />;
  }
  if (!score) {
    return <ErrorCard />;
  }
  let results = 'uncertain';
  if (score >= 2) {
    results = 'extrovert';
  }
  if (score <= -2) {
    results = 'introvert';
  }
  return (
    <StyledCard title="Quiz Results">
      <StyledTitle>
        Your are <StyledResults>{results}</StyledResults>
      </StyledTitle>
    </StyledCard>
  );
};

export const StyledResults = styled.span`
  font-style: italic;
  font-weight: bolder;
`;
