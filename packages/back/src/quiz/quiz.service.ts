import { Injectable } from '@nestjs/common';
import { QuizEntity } from './models/quiz.entity';
import { mockQuizEntityes } from './models/quiz.entity.mock';

@Injectable()
export class QuizService {
  private quizes: QuizEntity[] = mockQuizEntityes;
  public findBydId(id: number): QuizEntity | null {
    return this.quizes.find((item) => item.id === id) ?? null;
  }
  public findAll(): QuizEntity[] {
    return this.quizes;
  }
}
