export class ResponseEntity {
  public id!: number;
  public quizId!: number;
  public username!: string;
  public answers!: number[];
  public score!: number;
  public verdict!: string;
}

export type CreateResponse = Omit<ResponseEntity, 'score' | 'id' | 'verdict'>;
