import { Button, Input, Space } from 'antd';
import React, { ChangeEventHandler, FC, useState } from 'react';
import { StyledCard } from './styled';

export type StartQuizProps = {
  quizTitle: string;
  onStart?: (name: string) => void;
};
export const StartQuiz: FC<StartQuizProps> = ({ quizTitle, onStart }) => {
  const [name, setName] = useState<string>();
  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };
  const handleStart = () => {
    if (name) {
      onStart?.(name);
    }
  };
  return (
    <StyledCard title={quizTitle}>
      <Space direction="vertical">
        <Input
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
        <Button type="primary" disabled={!name} onClick={handleStart}>
          Start
        </Button>
      </Space>
    </StyledCard>
  );
};
