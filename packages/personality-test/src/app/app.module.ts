import { Module } from '@nestjs/common';
import { QuizModule } from '../quiz/quiz.module';
import { ResponseModule } from '../response/response.module';

@Module({
  imports: [QuizModule, ResponseModule],
  providers: [],
  controllers: [],
})
export class AppModule {}
