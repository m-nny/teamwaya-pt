import React, { FC } from 'react';
import styled from 'styled-components';
import { StyledCard, StyledTitle } from './styled';

export type QuizResultsProps = {
  score: number;
};
export const QuizResults: FC<QuizResultsProps> = ({ score }) => {
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
