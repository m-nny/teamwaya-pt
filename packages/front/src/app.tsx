import { Space } from 'antd';
import styled from 'styled-components';
import { Question, QuestionProps } from './components/question';
import { QuizResults, QuizResultsProps } from './components/quiz-results';
import { StartQuiz, StartQuizProps } from './components/start-quiz';

const defaultQustion: QuestionProps = {
  title: `You're really busy at work and a colleague is telling you their life story and personal woes. You:`,
  currentQuestion: 1,
  totalQuestions: 14,
  answers: [
    `Don't dare to interrupt them`,
    `Think it's more important to give them some of your time; work can wait`,
    `Listen, but with only with half an ear`,
    `Interrupt and explain that you are really busy at the moment`,
  ],
};

const defaultQuiz: StartQuizProps = {
  quizTitle: 'Are you an introvert or an extrovert?',
};

const defaultResults: QuizResultsProps = {
  score: 2,
};

export function App() {
  return (
    <StyledApp>
      <Space direction="vertical">
        <StartQuiz {...defaultQuiz} />
        <Question
          {...defaultQustion}
          onNext={(value) => console.log({ value })}
        />
        <QuizResults {...defaultResults} />
      </Space>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  // Your style here
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
`;
export default App;
