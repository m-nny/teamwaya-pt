import { Button, Progress, Radio, RadioChangeEvent, Space } from 'antd';
import _ from 'lodash';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { StyledCard, StyledTitle } from './styled';

type Question = {
  text: string;
  answers: { text: string }[];
};

export type QuestionProps = {
  questions: Question[];
  onFinish?: (answers: number[]) => void;
};

export const QuizQuestions: FC<QuestionProps> = ({ onFinish, questions }) => {
  const [curQuestionIdx, setCurQuestionIdx] = useState(0);
  const [curSelected, setCurSelected] = useState<number>();
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);

  const handleRadioChange = (e: RadioChangeEvent) => {
    setCurSelected(e.target.value);
  };
  const handleNextButton = () => {
    if (curSelected === undefined) {
      return;
    }
    if (curQuestionIdx + 1 === questions.length) {
      onFinish?.([...selectedAnswers, curSelected]);
      return;
    }
    setCurQuestionIdx(curQuestionIdx + 1);
    setSelectedAnswers([...selectedAnswers, curSelected]);
  };

  const curQuestion = questions[curQuestionIdx];

  const progressPercent = _.round(
    ((curQuestionIdx + 1) / questions.length) * 100
  );
  return (
    <StyledCard title={`Question ${curQuestionIdx + 1} of ${questions.length}`}>
      <Space direction="vertical">
        <StyledProgress percent={progressPercent} />
        <StyledTitle>{curQuestion.text}</StyledTitle>
        <Radio.Group onChange={handleRadioChange}>
          <Space direction="vertical">
            {curQuestion.answers.map((answer, idx) => (
              <StyledRadio value={idx} key={idx}>
                {answer.text}
              </StyledRadio>
            ))}
          </Space>
        </Radio.Group>
        <Button
          type="primary"
          disabled={curSelected === undefined}
          onClick={handleNextButton}
        >
          {curQuestionIdx + 1 === questions.length ? 'Finish' : 'Next'}
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
