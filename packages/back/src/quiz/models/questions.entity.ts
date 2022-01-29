export class AnswerEntity {
  public text!: string;
  public score!: number;
}

export class QuestionEntity {
  public id!: number;
  public text!: string;
  public answers!: AnswerEntity[];
}
