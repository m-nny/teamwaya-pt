import { QuizEntity } from './quiz.entity';

export const mockQuizEntityes: QuizEntity[] = [
  {
    id: 1,
    title: 'Are you an introvert or an extrovert?',
    questions: [
      {
        id: 1,
        question: `You're really busy at work and a colleague is telling you their life story and personal woes. You:`,
        answers: [
          { text: `Don't dare to interrupt them`, score: +2 },
          {
            text: `Think it's more important to give them some of your time; work can wait`,
            score: +1,
          },
          { text: `Listen, but with only with half an ear`, score: -1 },
          {
            text: `Interrupt and explain that you are really busy at the moment`,
            score: -2,
          },
        ],
      },
    ],
  },
];
