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
    const { score, verdict } = this.calculateScore(body);
    const item: ResponseEntity = {
      ...body,
      id: this.responses.length + 1,
      score: score,
      verdict: verdict,
    };
    this.responses.push(item);
    return item;
  }
  private calculateScore(body: CreateResponse) {
    const quiz = this.quizService.findBydId(body.quizId);
    if (!quiz) {
      throw new InternalServerErrorException('Quiz does not exist');
    }
    const score = _(body.answers)
      .map(
        (answerId, questionIdx) =>
          quiz.questions[questionIdx].answers[answerId].score
      )
      .sum();
    let verdict = 'uncertain';
    if (score > 2) {
      verdict = 'introvert';
    }
    if (score < -2) {
      verdict = 'extravert';
    }
    return { score, verdict };
  }
}
