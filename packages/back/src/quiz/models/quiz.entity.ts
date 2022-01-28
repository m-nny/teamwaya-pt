import { QuestionEntity } from './questions.entity';

export class QuizEntity {
  public id!: number;
  public title!: string;
  public questions!: QuestionEntity[];
}
