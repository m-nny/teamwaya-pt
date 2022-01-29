import { QuizEntity } from './types';
import { ApiGateway } from './utils';

export const getQuiz = (quizId = 1): Promise<QuizEntity> =>
  ApiGateway.request<QuizEntity>({
    method: 'GET',
    url: `/quizes/${quizId}`,
  }).then((res) => res.data);
