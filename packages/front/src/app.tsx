import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { LandingPage } from './pages/landing';
import { QuizPage } from './pages/quiz';
import { AppRoutes } from './routes';

export function App() {
  return (
    <StyledApp>
      <Switch>
        <Route path={AppRoutes.Home} exact>
          <LandingPage />
        </Route>
        <Route path={AppRoutes.StartQuiz}>
          <QuizPage />
        </Route>
      </Switch>
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
