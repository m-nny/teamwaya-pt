import { Button, Progress, Radio, RadioChangeEvent, Space } from 'antd';
import _ from 'lodash';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { StyledCard, StyledTitle } from './styled';

export type QuestionProps = {
  title: string;
  currentQuestion: number;
  totalQuestions: number;
  answers: string[];
  onNext?: (answerIdx: number) => void;
};

export const Question: FC<QuestionProps> = ({
  title,
  currentQuestion,
  totalQuestions,
  answers,
  onNext,
}) => {
  const progressPercent = _.round((currentQuestion / totalQuestions) * 100);
  const [selected, setSelected] = useState<number>();
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
        <StyledTitle>{title}</StyledTitle>
        <Radio.Group onChange={handleRadioChange}>
          <Space direction="vertical">
            {answers.map((answer, idx) => (
              <StyledRadio value={idx} key={idx}>
                {answer}
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
