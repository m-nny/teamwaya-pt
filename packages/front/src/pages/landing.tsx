import { Button, Space } from 'antd';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledCard, StyledTitle } from '../components/styled';
import { AppRoutes } from '../routes';

export const LandingPage: FC = () => {
  const history = useHistory();
  const handleEnterQuiz = () => {
    history.push(AppRoutes.StartQuiz);
  };
  return (
    <StyledCard title="Are you an introvert or an extrovert?">
      <Space direction="vertical">
        <StyledTitle>
          So do you consider yourself more of an introvert or an extrovert? Take
          this test, put together with input from psychoanalyst Sandrine Dury,
          and find out
        </StyledTitle>
        <Button type="primary" onClick={handleEnterQuiz}>
          Enter quiz
        </Button>
      </Space>
    </StyledCard>
  );
};
