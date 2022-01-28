import { CreateResponse } from '../models/response.model';
import { IsInt, IsString } from 'class-validator';

export class CreateResponseDto implements CreateResponse {
  @IsInt()
  public id!: number;

  @IsInt()
  public quizId!: number;

  @IsString()
  public username!: string;

  @IsInt()
  public answers!: number[];
}
