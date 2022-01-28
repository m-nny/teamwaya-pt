import styled from 'styled-components';
import { Question, QuestionProps } from './components/question';

const StyledApp = styled.div`
  // Your style here
`;

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

export function App() {
  return (
    <StyledApp>
      <Question {...defaultQustion} />
    </StyledApp>
  );
}

export default App;
