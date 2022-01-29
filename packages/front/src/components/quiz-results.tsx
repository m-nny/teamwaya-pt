import { Button, Space } from 'antd';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { ResponseEntity } from '../api/types';
import { AppRoutes } from '../routes';
import { StyledCard, StyledTitle } from './styled';

export type QuizResultsProps = {
  response: ResponseEntity;
};

export const QuizResults: FC<QuizResultsProps> = ({ response }) => {
  const history = useHistory();
  const handleTryAgain = () => {
    history.push(AppRoutes.Home);
  };
  const handleAllResults = () => {
    history.push(AppRoutes.AllResults);
  };
  return (
    <StyledCard title="Quiz Results">
      <Space direction="vertical">
        <StyledTitle>
          Your are <StyledResults>{response.verdict}</StyledResults>
        </StyledTitle>
        <Space direction="horizontal">
          <Button type="dashed" onClick={handleTryAgain}>
            Try again
          </Button>
          <Button type="primary" onClick={handleAllResults}>
            Watch all results
          </Button>
        </Space>
      </Space>
    </StyledCard>
  );
};

export const StyledResults = styled.span`
  font-style: italic;
  font-weight: bolder;
`;
