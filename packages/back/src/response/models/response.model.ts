export class ResponseEntity {
  public id!: number;
  public quizId!: number;
  public username!: string;
  public answers!: number[];
  public score!: number;
}

export type CreateResponse = Omit<ResponseEntity, 'score' | 'id'>;
