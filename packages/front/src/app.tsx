import styled from 'styled-components';
import { Question, QuestionProps } from './components/question';

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
      <Question
        {...defaultQustion}
        onNext={(value) => console.log({ value })}
      />
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
