import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { LandingPage } from './pages/landing';
import { QuizPage } from './pages/quiz';
import { AllResponsesPage } from './pages/responses';
import { AppRoutes } from './routes';

export function App() {
  return (
    <StyledApp>
      <Switch>
        <Route path={AppRoutes.StartQuiz}>
          <QuizPage />
        </Route>
        <Route path={AppRoutes.AllResults}>
          <AllResponsesPage />
        </Route>
        <Route path={AppRoutes.Home}>
          <LandingPage />
        </Route>
      </Switch>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
`;
export default App;
