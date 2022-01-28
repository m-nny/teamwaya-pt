import { Module } from '@nestjs/common';
import { QuizModule } from '../quiz/quiz.module';
import { ResponseController } from './response.controller';
import { ResponseService } from './response.service';

@Module({
  imports: [QuizModule],
  providers: [ResponseService],
  controllers: [ResponseController],
  exports: [],
})
export class ResponseModule {}
