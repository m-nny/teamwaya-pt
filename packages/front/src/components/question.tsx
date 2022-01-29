import { Button, Progress, Radio, RadioChangeEvent, Space } from 'antd';
import _ from 'lodash';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { StyledCard, StyledTitle } from './styled';

type Question = {
  text: string;
  answers: { text: string }[];
};

export type QuestionProps = {
  currentQuestion: number;
  totalQuestions: number;
  question: Question;
  onNext?: (answerIdx: number) => void;
  onFinish?: (answerIdx: number) => void;
};

export const QuizQuestion: FC<QuestionProps> = ({
  currentQuestion,
  totalQuestions,
  onNext,
  question,
}) => {
  const progressPercent = _.round((currentQuestion / totalQuestions) * 100);
  const [selected, setSelected] = useState<number>();
  useEffect(() => {
    setSelected(undefined);
  }, [question]);
  const handleRadioChange = (e: RadioChangeEvent) => {
    setSelected(e.target.value);
  };
  const handleNextButton = () => {
    if (selected !== undefined) {
      onNext?.(selected);
    }
  };
  return (
    <StyledCard title={`Question ${currentQuestion} of ${totalQuestions}`}>
      <Space direction="vertical">
        <StyledProgress percent={progressPercent} />
        <StyledTitle>{question.text}</StyledTitle>
        <Radio.Group onChange={handleRadioChange}>
          <Space direction="vertical">
            {question.answers.map((answer, idx) => (
              <StyledRadio value={idx} key={idx}>
                {answer.text}
              </StyledRadio>
            ))}
          </Space>
        </Radio.Group>
        <Button
          type="primary"
          disabled={selected === undefined}
          onClick={handleNextButton}
        >
          Next
        </Button>
      </Space>
    </StyledCard>
  );
};

const StyledRadio = styled(Radio)`
  margin-left: 16px;
`;

const StyledProgress = styled(Progress)`
  /* margin-bottom: 16px; */
`;
