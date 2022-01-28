import _ from 'lodash';
import { Button, Card, Progress, Radio, RadioChangeEvent, Space } from 'antd';
import React, { FC, useState } from 'react';
import styled from 'styled-components';

type Answer = {
  text: string;
  id: number;
};

export type QuestionProps = {
  title: string;
  currentQuestion: number;
  totalQuestions: number;
  answers: Answer[];
  onNext?: (answerId: number) => void;
};

export const Question: FC<QuestionProps> = ({
  title,
  currentQuestion,
  totalQuestions,
  answers,
  onNext,
}) => {
  const progressPercent = _.round((currentQuestion / totalQuestions) * 100);
  const [selected, setSelected] = useState(null);
  const handleRadioChange = (e: RadioChangeEvent) => {
    setSelected(e.target.value);
  };
  const handleNextButton = () => {
    if (selected !== null) {
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
            {answers.map((answer) => (
              <StyledRadio value={answer.id} key={answer.id}>
                {answer.text}
              </StyledRadio>
            ))}
          </Space>
        </Radio.Group>
        <Button
          type="primary"
          disabled={selected === null}
          onClick={handleNextButton}
        >
          Next
        </Button>
      </Space>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  width: 500px;
`;

const StyledTitle = styled.div`
  font-style: italic;
  font-weight: bold;
  /* margin-bottom: 16px; */
`;

const StyledRadio = styled(Radio)`
  margin-left: 16px;
`;

const StyledProgress = styled(Progress)`
  /* margin-bottom: 16px; */
`;
