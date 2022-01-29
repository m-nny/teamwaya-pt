import { CreateResponse } from '../models/response.model';
import { IsInt, IsString } from 'class-validator';

export class CreateResponseDto implements CreateResponse {
  @IsInt()
  public quizId!: number;

  @IsString()
  public username!: string;

  @IsInt({ each: true })
  public answers!: number[];
}
