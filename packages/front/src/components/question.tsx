import React, { FC } from 'react';
import styled from 'styled-components';

export type QuestionProps = {
  title: string;
  currentQuestion: number;
  totalQuestions: number;
  answers: string[];
};
export const Question: FC<QuestionProps> = ({
  title,
  currentQuestion,
  totalQuestions,
  answers,
}) => {
  return (
    <StyledQuestion>
      <Progress>
        Question {currentQuestion} of {totalQuestions}
      </Progress>
      <Progress>{title}</Progress>
      <>
        {answers.map((answer, idx) => (
          <div>{answer}</div>
        ))}
      </>
    </StyledQuestion>
  );
};

const Progress = styled.div`
  font-size: 19px;
  margin-bottom: 16px;
`;

const StyledQuestion = styled.div`
  max-width: 600px;
  min-height: 400px;
  border: 1px solid #ccc;
  border-radius: 16px;
  padding: 32px;
`;
