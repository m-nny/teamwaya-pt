export class AnswerEntity {
  public text!: string;
  public score!: number;
}

export class QuestionEntity {
  public id!: number;
  public question!: string;
  public answers!: AnswerEntity[];
}
