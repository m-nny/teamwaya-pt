import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateResponseDto } from './dto/create.response.dto';
import { ResponseEntity } from './models/response.model';
import { ResponseService } from './response.service';

@Controller('/responses')
export class ResponseController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/')
  public getAll(): ResponseEntity[] {
    const items = this.responseService.findAll();
    return items;
  }

  @Get('/:id')
  public getById(@Param('id', ParseIntPipe) id: number): ResponseEntity {
    const item = this.responseService.findBydId(id);
    if (!item) {
      throw new NotFoundException(`Response with id "${id}" not found`);
    }
    return item;
  }

  @Post('/')
  public create(@Body() body: CreateResponseDto): ResponseEntity {
    const item = this.responseService.create(body);
    return item;
  }
}
