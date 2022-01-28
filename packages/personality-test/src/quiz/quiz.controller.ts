import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { QuizEntity } from './models/quiz.entity';
import { QuizService } from './quiz.service';

@Controller('/quizes')
export class QuizController {
  public constructor(private readonly quizService: QuizService) {}

  @Get('/')
  public getAll(): QuizEntity[] {
    const items = this.quizService.findAll();
    return items;
  }
  @Get('/:id')
  public getById(@Param('id', ParseIntPipe) id: number): QuizEntity {
    const item = this.quizService.findBydId(id);
    if (!item) {
      throw new NotFoundException(`Quiz with id "${id}" not found`);
    }
    return item;
  }
}
