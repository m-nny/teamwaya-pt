import { QuizEntity } from './quiz.entity';

export const mockQuizEntityes: QuizEntity[] = [
  {
    id: 1,
    title: 'Are you an introvert or an extrovert?',
    questions: [
      {
        id: 1,
        text: "You're really busy at work and a colleague is telling you their life story and personal woes. You:",
        answers: [
          { text: "Don't dare to interrupt them", score: 2 },
          {
            text: "Think it's more important to give them some of your time; work can wait",
            score: 1,
          },
          { text: 'Listen, but with only with half an ear', score: -1 },
          {
            text: 'Interrupt and explain that you are really busy at the moment',
            score: -2,
          },
        ],
      },
      {
        id: 2,
        text: "You've been sitting in the doctor's waiting room for more than 25 minutes. You:",
        answers: [
          { text: 'Look at your watch every two minutes', score: 2 },
          {
            text: 'Bubble with inner anger, but keep quiet',
            score: 1,
          },
          {
            text: 'Explain to other equally impatient people in the room that the doctor is always running late',
            score: -1,
          },
          {
            text: 'Complain in a loud voice, while tapping your foot impatiently',
            score: -2,
          },
        ],
      },
      {
        id: 3,
        text: "You're having an animated discussion with a colleague regarding a project that you're in charge of. You:",
        answers: [
          { text: 'Don"t dare contradict them', score: 2 },
          {
            text: 'Think that they are obviously right',
            score: 1,
          },
          {
            text: 'Defend your own point of view, tooth and nail',
            score: -1,
          },
          {
            text: 'Continuously interrupt your colleague',
            score: -2,
          },
        ],
      },
    ],
  },
];
