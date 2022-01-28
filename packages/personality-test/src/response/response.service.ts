import { Injectable, InternalServerErrorException } from '@nestjs/common';
import _ from 'lodash';
import { QuizService } from '../quiz/quiz.service';
import { CreateResponse, ResponseEntity } from './models/response.model';

@Injectable()
export class ResponseService {
  private responses: ResponseEntity[] = [];
  constructor(private readonly quizService: QuizService) {}

  public findBydId(id: number): ResponseEntity | null {
    return this.responses.find((item) => item.id === id) ?? null;
  }
  public findAll(): ResponseEntity[] {
    return this.responses;
  }
  public create(body: CreateResponse) {
    const score = this.calculateScore(body);
    const item: ResponseEntity = {
      ...body,
      id: this.responses.length + 1,
      score: score,
    };
    this.responses.push(item);
    return item;
  }
  private calculateScore(body: CreateResponse): number {
    const quiz = this.quizService.findBydId(body.quizId);
    if (!quiz) {
      throw new InternalServerErrorException('Quiz does not exist');
    }
    const totalScore = _(body.answers)
      .map(
        (answerId, questionIdx) =>
          quiz.questions[questionIdx].answers[answerId].score
      )
      .sum();
    return totalScore;
  }
}
